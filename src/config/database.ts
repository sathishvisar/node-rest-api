import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI!;

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
}
