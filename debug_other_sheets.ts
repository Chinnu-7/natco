import * as XLSX from 'xlsx';
import * as fs from 'fs';

const buf = fs.readFileSync('Final_Grade_Extraction.xlsx');
const wb = XLSX.read(buf, { type: 'buffer' });

['Sheet1', 'Sheet2'].forEach(sheetName => {
    console.log(`--- ${sheetName} ---`);
    const ws = wb.Sheets[sheetName];
    if (ws) {
        const rows = XLSX.utils.sheet_to_json(ws, { header: 1 }).slice(0, 5);
        console.log(JSON.stringify(rows, null, 2));
    } else {
        console.log('Sheet not found');
    }
});
