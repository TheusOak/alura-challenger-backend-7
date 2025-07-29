import express from 'express';
import connectToDatabase from './config/db.js';
import depoimentoRoutes from './routes/depoimentoRoutes.js';

const db = await connectToDatabase();
db.on('error', () => {
  console.error('Database connection error');
});
db.once('open', () => {
  console.log('Database connected successfully');
});

const app = express();
app.use(express.json());

app.use('/api/depoimentos', depoimentoRoutes);

export default app;