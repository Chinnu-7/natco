import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { StudentDetail } from '../types';

interface ExcelUploaderProps {
    onDataLoaded: (data: StudentDetail[]) => void;
}

export const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onDataLoaded }) => {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = (evt) => {
                const bstr = evt.target?.result;
                if (bstr) {
                    const wb = XLSX.read(bstr, { type: 'binary' });
                    const wsname = wb.SheetNames[0];
                    const ws = wb.Sheets[wsname];
                    const jsonRows = XLSX.utils.sheet_to_json<any[]>(ws, { header: 1 });

                    const mappedData: StudentDetail[] = jsonRows
                        .filter(row => row.length > 0 && (typeof row[0] === 'number' || (typeof row[0] === 'string' && /^\d+$/.test(row[0]))))
                        .map(row => ({
                            schoolId: String(row[0]),
                            schoolName: row[1],
                            district: row[2],
                            loginId: String(row[3]),
                            studentName: row[4],
                            englishLevel: row[7],
                            mathLevel: row[6],
                            grade: row[5]
                        }));

                    onDataLoaded(mappedData);
                }
            };
            reader.readAsBinaryString(file);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <label className="block text-sm font-medium text-gray-700">
                Upload Excel Data
            </label>
            <div className="relative">
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
          "
                />
            </div>
            {fileName && <span className="text-sm text-gray-500">Loaded: {fileName}</span>}
        </div>
    );
};
