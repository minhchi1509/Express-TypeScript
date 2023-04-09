import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app: Application = express();
const port = 8080;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

(async () => {
  await mongoose.connect(process.env.MONGODB_URL as string);
  console.log('Successfully connected to MongoDB');
})().catch(() => {
  console.log('Failed to connect to MongoDB.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
