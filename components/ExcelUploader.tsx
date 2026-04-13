import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { StudentDetail } from '../types';
import { Download, Upload, FileSpreadsheet } from 'lucide-react';

interface ExcelUploaderProps {
    onDataLoaded: (data: StudentDetail[]) => void;
}

export const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onDataLoaded }) => {
    const [fileName, setFileName] = useState<string>('');
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const downloadTemplate = () => {
        const headers = [
            ['School ID', 'School Name', 'District', 'Login ID', 'Student Name', 'Grade', 'Math Level', 'English Level']
        ];
        const sampleData = [
            ['12345', 'Sample School', 'District A', 'STU001', 'John Doe', 'Grade 5', 'Level 4', 'Level 5']
        ];

        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet([...headers, ...sampleData]);
        XLSX.utils.book_append_sheet(wb, ws, 'Template');
        XLSX.writeFile(wb, 'student_data_template.xlsx');
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setIsUploading(true);

        try {
            const data = await file.arrayBuffer();
            const wb = XLSX.read(data);
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const jsonRows = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });

            // Robust mapping logic
            const mappedData: StudentDetail[] = jsonRows
                .filter((row, index) => {
                    if (index === 0) return false; // Skip header row
                    return row.length >= 8 && (typeof row[0] === 'number' || (typeof row[0] === 'string' && /^\d+$/.test(row[0])));
                })
                .map(row => ({
                    schoolId: String(row[0] || ''),
                    schoolName: String(row[1] || ''),
                    district: String(row[2] || ''),
                    loginId: String(row[3] || ''),
                    studentName: String(row[4] || ''),
                    grade: String(row[5] || ''),
                    mathLevel: String(row[6] || ''),
                    englishLevel: String(row[7] || '')
                }));

            if (mappedData.length === 0) {
                alert("No valid data found in the Excel file. Please ensure it follows the template format.");
            } else {
                onDataLoaded(mappedData);
            }
        } catch (error) {
            console.error("Error parsing Excel file:", error);
            alert("Failed to parse the Excel file. Please make sure it is a valid .xlsx or .xls file.");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    return (
        <div className="flex flex-col space-y-2 mb-6 w-full">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-indigo-600" />
                <span>Data Management</span>
            </h2>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-wrap gap-y-2">
                <button
                    onClick={downloadTemplate}
                    className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors border border-indigo-100 font-medium text-sm"
                >
                    <Download className="w-4 h-4" />
                    <span>Download Template</span>
                </button>

                <div className="hidden sm:block h-6 w-px bg-gray-200"></div>

                <div className="relative">
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isUploading}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors font-medium text-sm border ${isUploading
                                ? 'bg-gray-100 text-gray-400 border-gray-200'
                                : 'bg-green-50 text-green-700 hover:bg-green-100 border-green-100'
                            }`}
                    >
                        <Upload className="w-4 h-4" />
                        <span>{isUploading ? 'Uploading...' : 'Upload Data'}</span>
                    </button>
                </div>

                {fileName && !isUploading && (
                    <div className="flex items-center space-x-2 animate-fade-in">
                        <span className="hidden sm:inline text-sm font-medium text-gray-400">|</span>
                        <span className="text-sm text-gray-600 flex items-center">
                            <span className="font-semibold text-indigo-600 truncate max-w-[200px]">{fileName}</span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
