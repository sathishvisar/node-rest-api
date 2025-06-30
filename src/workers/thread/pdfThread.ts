// src/workers/thread/pdfThread.ts
import { parentPort, workerData } from 'worker_threads';
import { generateNewPdf } from '../../utils/generatePdf';

(async () => {
  try {
    const filePath = await generateNewPdf(workerData.content);
    parentPort?.postMessage({ success: true, filePath });
  } catch (err) {
    parentPort?.postMessage({ success: false, error: err });
  }
})();
