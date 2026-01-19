// This file contains the code to read the data from an Excel file using the xlsx library.
//

const XLSX = require('xlsx');

const readExcelFile = (filePath) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

module.exports = {
  readExcelFile,
};