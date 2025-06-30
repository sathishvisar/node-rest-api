// src/utils/generatePdf.ts
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export function generateNewPdf(content: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const reportsDir = path.resolve(__dirname, '../../reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir);
    }

    const timestamp = Date.now();
    const fileName = `report-${timestamp}.pdf`;
    const filePath = path.join(reportsDir, fileName);

    const doc = new PDFDocument();
    const writeStream = fs.createWriteStream(filePath);

    // ✅ Only resolve once PDF file is fully written
    writeStream.on('finish', () => {
      console.log('✅ Finished writing:', filePath);
      resolve(filePath);
    });

    writeStream.on('error', (err) => {
      console.error('❌ Write error:', err);
      reject(err);
    });

    doc.pipe(writeStream);

    doc.fontSize(20).text('Generated PDF Report', { underline: true });
    doc.moveDown();
    doc.fontSize(14).text(content);
    doc.end(); // Triggers finish
  });
}
