import { QueueEvents } from 'bullmq';
import { IPDFReportService } from '../interfaces/IPDFReportService';
import { pdfQueue } from '../queues/pdfQueue';
// import { generateNewPdf } from '../utils/generatePdf';
import { redisConnection } from '../queues/redisConfig';


export class PDFReportService implements IPDFReportService {
  async generateReport(content: string): Promise<string>{
    // const filePath = generateNewPdf(content);
    // return filePath;
    const job = await pdfQueue.add('generatePdf', { content });

    // ✅ Create a QueueEvents instance for this queue
    const queueEvents = new QueueEvents('pdf', { connection: redisConnection });

    // ✅ Wait until job is finished and return the result
    const result = await job.waitUntilFinished(queueEvents);

    return result;
  }
}
