import * as XLSX from 'xlsx';
import * as fs from 'fs';

const buf = fs.readFileSync('Final_Grade_Extraction.xlsx');
const wb = XLSX.read(buf, { type: 'buffer' });
const ws = wb.Sheets[wb.SheetNames[0]];
// Get first 5 rows as arrays
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 }).slice(0, 5);
console.log(JSON.stringify(rows, null, 2));
