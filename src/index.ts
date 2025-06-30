import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';
import app from './app';
import { connectDatabase } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`👑 Primary process ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  connectDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Worker ${process.pid} running on port ${PORT}`);
    });
  });
}
