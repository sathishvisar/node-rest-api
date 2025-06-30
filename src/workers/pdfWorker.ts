// src/workers/pdfWorker.ts
import { Worker } from 'bullmq';
import { Worker as ThreadWorker } from 'worker_threads';
import path from 'path';
import { redisConnection } from '../queues/redisConfig';

const pdfWorker = new Worker(
  'pdf',
  async (job) => {
    console.log('new Job started')
    return new Promise((resolve, reject) => {
      const thread = new ThreadWorker(path.resolve(__dirname, './thread/pdfThread.ts'), {
        workerData: { content: job.data.content },
      });

      thread.on('message', (msg) => {
        if (msg.success) resolve(msg.filePath);
        else reject(msg.error);
      });

      thread.on('error', reject);
    });
  },
  { connection: redisConnection }
);

pdfWorker.on('completed', (job, result) => {
  console.log(`✅ PDF Job ${job.id} completed: ${result}`);
});

pdfWorker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} failed:`, err);
});
