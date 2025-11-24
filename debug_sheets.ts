import * as XLSX from 'xlsx';
import * as fs from 'fs';

const buf = fs.readFileSync('Final_Grade_Extraction.xlsx');
const wb = XLSX.read(buf, { type: 'buffer' });
console.log('Sheet Names:', wb.SheetNames);
