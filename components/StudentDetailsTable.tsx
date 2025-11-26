
import React, { useState, useMemo } from 'react';
import * as XLSX from 'xlsx';
// Fix: The type 'Student' is not exported from '../types'. Changed to 'StudentDetail' which is the correct type for student data.
import type { StudentDetail } from '../types';

interface StudentDetailsTableProps {
  students: StudentDetail[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const ITEMS_PER_PAGE = 7;

export const StudentDetailsTable: React.FC<StudentDetailsTableProps> = ({ students, searchTerm, setSearchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [localDistrictFilter, setLocalDistrictFilter] = useState('all');
  const [localSchoolFilter, setLocalSchoolFilter] = useState('all');
  const [localGradeFilter, setLocalGradeFilter] = useState('all');

  // Get unique districts, schools, and grades from students
  const uniqueDistricts = useMemo(() => {
    const districts = Array.from(new Set(students.map(s => s.district)));
    return ['all', ...districts.sort()];
  }, [students]);

  const uniqueSchools = useMemo(() => {
    const filtered = students.filter(s => 
      localDistrictFilter === 'all' || s.district === localDistrictFilter
    );
    const schools = Array.from(new Set(filtered.map(s => s.schoolName)));
    return ['all', ...schools.sort()];
  }, [students, localDistrictFilter]);

  const uniqueGrades = useMemo(() => {
    const filtered = students.filter(s => 
      (localDistrictFilter === 'all' || s.district === localDistrictFilter) &&
      (localSchoolFilter === 'all' || s.schoolName === localSchoolFilter)
    );
    const grades = Array.from(new Set(filtered.map(s => s.grade)));
    return ['all', ...grades.sort((a, b) => {
      const aNum = parseInt(a.replace('Grade ', ''), 10);
      const bNum = parseInt(b.replace('Grade ', ''), 10);
      return aNum - bNum;
    })];
  }, [students, localDistrictFilter, localSchoolFilter]);

  // Apply local filters and search
  const filteredStudents = useMemo(() => {
    return students.filter(s => {
      const districtMatch = localDistrictFilter === 'all' || s.district === localDistrictFilter;
      const schoolMatch = localSchoolFilter === 'all' || s.schoolName === localSchoolFilter;
      const gradeMatch = localGradeFilter === 'all' || s.grade === localGradeFilter;
      const searchMatch = searchTerm === '' || 
        s.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.loginId.toLowerCase().includes(searchTerm.toLowerCase());
      
      return districtMatch && schoolMatch && gradeMatch && searchMatch;
    });
  }, [students, localDistrictFilter, localSchoolFilter, localGradeFilter, searchTerm]);

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);

  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudents.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredStudents, currentPage]);
  
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
    }
  }

  const handleDownloadCSV = () => {
    if (filteredStudents.length === 0) {
      alert('No students to download');
      return;
    }

    const headers = ['District', 'School Id', 'School Name', 'LoginId', 'Student Name', 'Grade', 'English Level', 'Math Level'];
    const rows = filteredStudents.map(s => [
      s.district,
      s.schoolId,
      s.schoolName,
      s.loginId,
      s.studentName,
      s.grade,
      s.englishLevel,
      s.mathLevel,
    ]);

    // Build CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `students_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  const handleDownloadExcel = () => {
    if (filteredStudents.length === 0) {
      alert('No students to download');
      return;
    }

    const headers = ['District', 'School Id', 'School Name', 'LoginId', 'Student Name', 'Grade', 'English Level', 'Math Level'];
    const rows = filteredStudents.map(s => [
      s.district,
      s.schoolId,
      s.schoolName,
      s.loginId,
      s.studentName,
      s.grade,
      s.englishLevel,
      s.mathLevel,
    ]);

    // Create worksheet data
    const worksheetData = [headers, ...rows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    
    // Set column widths
    worksheet['!cols'] = [
      { wch: 15 },
      { wch: 12 },
      { wch: 20 },
      { wch: 15 },
      { wch: 20 },
      { wch: 10 },
      { wch: 15 },
      { wch: 15 },
    ];

    // Create workbook and add sheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');

    // Generate file name and download
    const fileName = `students_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Student Details</h3>
          <div className="flex gap-2">
            <button
              onClick={handleDownloadCSV}
              className="px-4 py-2 bg-brand-dark text-white rounded-md hover:bg-opacity-90 text-sm font-medium"
            >
              Download CSV
            </button>
            <button
              onClick={handleDownloadExcel}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-opacity-90 text-sm font-medium"
            >
              Download Excel
            </button>
          </div>
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
            <select
              value={localDistrictFilter}
              onChange={(e) => {
                setLocalDistrictFilter(e.target.value);
                setLocalSchoolFilter('all');
                setLocalGradeFilter('all');
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-dark focus:border-brand-dark"
            >
              {uniqueDistricts.map(d => (
                <option key={d} value={d}>{d === 'all' ? 'All Districts' : d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
            <select
              value={localSchoolFilter}
              onChange={(e) => {
                setLocalSchoolFilter(e.target.value);
                setLocalGradeFilter('all');
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-dark focus:border-brand-dark"
            >
              {uniqueSchools.map(s => (
                <option key={s} value={s}>{s === 'all' ? 'All Schools' : s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
            <select
              value={localGradeFilter}
              onChange={(e) => {
                setLocalGradeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-dark focus:border-brand-dark"
            >
              {uniqueGrades.map(g => (
                <option key={g} value={g}>{g === 'all' ? 'All Grades' : g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              type="text"
              placeholder="Search student name or ID..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-dark focus:border-brand-dark"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['District', 'School Id', 'School Name', 'LoginId', 'Student Name', 'Grade', 'English Level', 'Math Level'].map(header => (
                 <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                 </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedStudents.map((student, index) => (
              <tr key={student.loginId + index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.district}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.schoolId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.schoolName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.loginId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.studentName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.englishLevel}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.mathLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {paginatedStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">No students found.</div>
        )}
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
            </span>
            <div className="flex gap-2">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
      )}
    </div>
  );
};