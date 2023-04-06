import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Application = express();
const port = 8080; // Khai báo cổng
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log('Server is running');
});
