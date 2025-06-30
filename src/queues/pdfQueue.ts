// src/queues/pdfQueue.ts
import { Queue } from 'bullmq';
import { redisConnection } from './redisConfig';

export const pdfQueue = new Queue('pdf', { connection: redisConnection });
