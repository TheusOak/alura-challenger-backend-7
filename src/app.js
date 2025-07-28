import express from 'express';
import connectToDatabase from './config/db.js';

const db = await connectToDatabase();
db.on('error', () => {
  console.error('Database connection error');
});
db.once('open', () => {
  console.log('Database connected successfully');
});

const app = express();
app.use(express.json());

export default app;