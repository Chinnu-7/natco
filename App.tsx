import React, { useState, useMemo, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { DashboardCard } from './components/DashboardCard';
import { OverallParticipation } from './components/OverallParticipation';
import { GradeWiseParticipationChart } from './components/GradeWiseParticipationChart';
import { GapToGradeChart } from './components/GapToGradeChart';
import { StudentDetailsTable } from './components/StudentDetailsTable';
import { SchoolWisePerformanceTable } from './components/SchoolWisePerformanceTable';
import { ExcelUploader } from './components/ExcelUploader';
import type { DataFilters, School, GradeWiseParticipation, GapToGradeData, SchoolPerformance, StudentDetail, District, Grade } from './types';
// @ts-ignore
import excelFileUrl from './Final_Grade_Extraction.xlsx?url';
import { registrationData } from './registrationData';

const App: React.FC = () => {
  const [filters, setFilters] = useState<DataFilters>({
    selectedDistrict: 'all',
    selectedSchool: 'all',
    selectedGrade: 'all',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [allStudentDetails, setAllStudentDetails] = useState<StudentDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDefaultData = async () => {
      try {
        const response = await fetch(excelFileUrl);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target?.result;
          if (data) {
            const wb = XLSX.read(data, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            // Read as array of arrays to handle missing/weird headers
            const jsonRows = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });

            const mappedData: StudentDetail[] = jsonRows
              .filter(row => row.length > 0 && (typeof row[0] === 'number' || (typeof row[0] === 'string' && /^\d+$/.test(row[0])))) // Filter for rows starting with schoolId (number)
              .map(row => ({
                schoolId: String(row[0]),
                schoolName: row[1],
                district: row[2],
                loginId: String(row[3]),
                studentName: row[4],
                englishLevel: row[5],
                mathLevel: row[6],
                grade: row[7]
              }));

            setAllStudentDetails(mappedData);
          }
          setIsLoading(false);
        };
        reader.readAsBinaryString(blob);
      } catch (error) {
        console.error("Failed to load default Excel file:", error);
        setIsLoading(false);
      }
    };

    loadDefaultData();
  }, []);

  const handleFileUpload = (data: StudentDetail[]) => {
    setAllStudentDetails(data);
    alert(`Successfully loaded ${data.length} student records.`);
  };

  const {
    districts,
    schools,
    grades,
    filteredSchools,
    totalRegistered,
    totalParticipated,
    gradeWiseParticipation,
    englishGapToGrade,
    mathGapToGrade,
    schoolPerformanceData,
    filteredStudentDetails,
  } = useMemo(() => {
    // Extract unique metadata from allStudentDetails
    const uniqueDistrictsMap = new Map<string, District>();
    const uniqueSchoolsMap = new Map<string, School>();
    const uniqueGradesMap = new Map<string, Grade>();

    allStudentDetails.forEach(s => {
      if (s.district && !uniqueDistrictsMap.has(s.district)) {
        uniqueDistrictsMap.set(s.district, { district_id: uniqueDistrictsMap.size + 1, district_name: s.district });
      }
      if (s.schoolName && !uniqueSchoolsMap.has(s.schoolName)) {
        // Use schoolId from data if available and numeric, else generate one
        const sId = parseInt(s.schoolId as string) || (uniqueSchoolsMap.size + 1);
        const dId = uniqueDistrictsMap.get(s.district || '')?.district_id || 0;
        uniqueSchoolsMap.set(s.schoolName, { school_id: sId, school_name: s.schoolName, district_id: dId });
      }
      if (s.grade && !uniqueGradesMap.has(s.grade)) {
        uniqueGradesMap.set(s.grade, { grade_id: uniqueGradesMap.size + 1, grade_name: s.grade });
      }
    });

    const districts = Array.from(uniqueDistrictsMap.values());
    const schools = Array.from(uniqueSchoolsMap.values());
    const grades = Array.from(uniqueGradesMap.values()).sort((a, b) => a.grade_name.localeCompare(b.grade_name, undefined, { numeric: true }));

    // Filter Logic
    let tempFilteredStudentDetails = allStudentDetails;

    if (filters.selectedDistrict !== 'all') {
      tempFilteredStudentDetails = tempFilteredStudentDetails.filter(s => s.district === filters.selectedDistrict);
    }
    if (filters.selectedSchool !== 'all') {
      tempFilteredStudentDetails = tempFilteredStudentDetails.filter(s => s.schoolName === filters.selectedSchool);
    }
    if (filters.selectedGrade !== 'all') {
      tempFilteredStudentDetails = tempFilteredStudentDetails.filter(s => s.grade === filters.selectedGrade);
    }
    if (searchTerm) {
      tempFilteredStudentDetails = tempFilteredStudentDetails.filter(student =>
        (student.studentName && student.studentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (student.loginId && student.loginId.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Metrics
    // Assumption: Every record in the excel is a registered student who participated.
    const totalRegistered = tempFilteredStudentDetails.length;
    const totalParticipated = tempFilteredStudentDetails.length; // Or filter by some criteria if needed

    // Filtered Schools for Dropdown (dependent on district selection)
    let filteredSchools = schools;
    if (filters.selectedDistrict !== 'all') {
      const selectedDistrictId = districts.find(d => d.district_name === filters.selectedDistrict)?.district_id;
      filteredSchools = schools.filter(s => s.district_id === selectedDistrictId);
    }

    // Grade Wise Participation
    const gradeWiseParticipation: GradeWiseParticipation[] = [1, 2, 3, 4, 5, 6, 7].map(gNum => {
      const gradeKey = `Grade ${gNum}`;

      // Check if this grade is selected (or if 'all' is selected)
      let isGradeSelected = true;
      if (filters.selectedGrade !== 'all') {
        // Extract number from selected grade string e.g. "Grade 1" -> 1
        const m = filters.selectedGrade.match(/\d+/);
        const selectedNum = m ? parseInt(m[0], 10) : -1;
        if (selectedNum !== gNum) {
          isGradeSelected = false;
        }
      }

      if (!isGradeSelected) {
        return {
          grade: gradeKey,
          registered: 0,
          participated: 0
        };
      }

      // Filter registrationData based on district and school
      const relevantData = registrationData.filter(item => {
        if (filters.selectedDistrict !== 'all' && item.district !== filters.selectedDistrict) return false;
        if (filters.selectedSchool !== 'all' && item.schoolName !== filters.selectedSchool) return false;
        return true;
      });

      // Sum up counts
      const regKey = `regG${gNum}` as keyof typeof registrationData[0];
      const partKey = `partG${gNum}` as keyof typeof registrationData[0];

      const totalReg = relevantData.reduce((sum, item) => sum + (item[regKey] as number || 0), 0);
      const totalPart = relevantData.reduce((sum, item) => sum + (item[partKey] as number || 0), 0);

      return {
        grade: gradeKey,
        registered: totalReg,
        participated: totalPart,
      };
    });

    // Gap to Grade Data
    const calculateGap = (studentGrade: string, level: string): number | null => {
      if (!studentGrade || !level) return null;

      // Parse Grade
      // studentGrade might be "5" or "Grade 5"
      const gradeMatch = studentGrade.toString().match(/\d+/);
      const gradeNum = gradeMatch ? parseInt(gradeMatch[0], 10) : null;
      if (gradeNum === null) return null;

      // Parse Level
      const levelStr = level.trim();
      if (levelStr === 'At Level' || levelStr === 'Level 0') return 0;

      if (levelStr.startsWith('Level')) {
        const levelMatch = levelStr.match(/\d+/);
        const levelNum = levelMatch ? parseInt(levelMatch[0], 10) : null;

        if (levelNum !== null) {
          return levelNum - gradeNum;
        }
      }

      return null;
    };

    const processGapData = (levelField: 'englishLevel' | 'mathLevel'): GapToGradeData[] => {
      const gapCounts = new Map<number, number>();

      tempFilteredStudentDetails.forEach(student => {
        const gap = calculateGap(student.grade, student[levelField]);
        if (gap !== null) {
          gapCounts.set(gap, (gapCounts.get(gap) || 0) + 1);
        }
      });

      const data: GapToGradeData[] = [];
      const sortedGaps = Array.from(gapCounts.keys()).sort((a, b) => a - b);

      sortedGaps.forEach(gap => {
        let name = '';
        if (gap === 0) name = 'At Grade Level';
        else if (gap < 0) name = `${Math.abs(gap)} Year${Math.abs(gap) > 1 ? 's' : ''} Below`;
        else name = `${gap} Year${gap > 1 ? 's' : ''} Above`;

        data.push({ name, Students: gapCounts.get(gap) || 0 });
      });

      return data;
    };

    const englishGapToGrade = processGapData('englishLevel');
    const mathGapToGrade = processGapData('mathLevel');

    // School Performance Data
    // We need to aggregate by school from tempFilteredStudentDetails
    const schoolAggregates = new Map<string, { total: number, englishScore: number, mathScore: number, district: string }>();

    tempFilteredStudentDetails.forEach(s => {
      if (!s.schoolName) return; // Skip if schoolName is missing

      if (!schoolAggregates.has(s.schoolName)) {
        schoolAggregates.set(s.schoolName, { total: 0, englishScore: 0, mathScore: 0, district: s.district || 'N/A' });
      }
      const agg = schoolAggregates.get(s.schoolName)!;
      agg.total += 1;

      // Scoring logic
      // At Grade Level: Score = 1
      // Below Grade Level: Score = Gap (negative)
      // Above Grade Level: Score = Gap + 1
      const getScore = (studentGrade: string, level: string): number => {
        const gap = calculateGap(studentGrade, level);
        if (gap === null) return 0;

        if (gap === 0) return 1;
        if (gap < 0) return gap; // e.g. -1, -2
        return gap + 1; // e.g. 1 -> 2
      };

      agg.englishScore += getScore(s.grade, s.englishLevel);
      agg.mathScore += getScore(s.grade, s.mathLevel);
    });

    const schoolPerformanceData: SchoolPerformance[] = Array.from(schoolAggregates.entries()).map(([schoolName, data]) => ({
      schoolName,
      districtName: data.district,
      totalRegistered: data.total,
      totalParticipated: data.total,
      participationRate: 100,
      avgEnglishPerformance: data.total > 0 ? parseFloat((data.englishScore / data.total).toFixed(2)) : 0,
      avgMathPerformance: data.total > 0 ? parseFloat((data.mathScore / data.total).toFixed(2)) : 0,
    }));

    return {
      districts,
      schools,
      grades,
      filteredSchools,
      totalRegistered,
      totalParticipated,
      gradeWiseParticipation,
      englishGapToGrade,
      mathGapToGrade,
      schoolPerformanceData,
      filteredStudentDetails: tempFilteredStudentDetails,
    };
  }, [allStudentDetails, filters, searchTerm]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading data...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <ExcelUploader onDataLoaded={handleFileUpload} />
            </div>

            <FilterBar
              districts={districts}
              grades={grades}
              filters={filters}
              onFilterChange={setFilters}
              filteredSchools={filteredSchools}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DashboardCard title="Total Schools" value={(filters.selectedSchool !== 'all' ? 1 : filteredSchools.length).toString()} />
              <DashboardCard title="Total Students" value={totalRegistered.toLocaleString()} />
              <DashboardCard title="Students Participated" value={totalParticipated.toLocaleString()} />
              <DashboardCard title="Overall Participation" value={`${(totalRegistered > 0 ? (totalParticipated / totalRegistered) * 100 : 0).toFixed(1)}%`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <OverallParticipation total={totalRegistered} participated={totalParticipated} />
              </div>
              <div className="lg:col-span-2">
                <GradeWiseParticipationChart data={gradeWiseParticipation} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GapToGradeChart title="English - Gap to Grade Level" data={englishGapToGrade} />
              <GapToGradeChart title="Math - Gap to Grade Level" data={mathGapToGrade} />
            </div>

            <SchoolWisePerformanceTable schools={schoolPerformanceData} />

            <StudentDetailsTable students={filteredStudentDetails} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;