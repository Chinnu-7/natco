import * as XLSX from 'xlsx';
import * as fs from 'fs';

const buf = fs.readFileSync('Final_Grade_Extraction.xlsx');
const wb = XLSX.read(buf, { type: 'buffer' });
const ws = wb.Sheets[wb.SheetNames[0]];
const headers = XLSX.utils.sheet_to_json(ws, { header: 1 })[0];
console.log('Excel Headers:', headers);

const firstRow = XLSX.utils.sheet_to_json(ws)[0];
console.log('First Row Data:', firstRow);
