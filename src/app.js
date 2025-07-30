import express from 'express';
import cors from 'cors';
import connectToDatabase from './config/db.js';
import depoimentoRoutes from './routes/depoimentoRoutes.js';

const db = await connectToDatabase();
db.on('error', () => {
  console.error('Database connection error');
});
db.once('open', () => {
  console.log('Database connected successfully');
});

const allowedOrigins = process.env.ORIGINS_URL?.split(',') || [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

const app = express();
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/depoimentos', depoimentoRoutes);

export default app;