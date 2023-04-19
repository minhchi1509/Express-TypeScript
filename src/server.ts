import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import sequelize from '@/configs/sequelize.config';
import customerRoute from './routes/customer.route';

const app: Application = express();
const port = 8080;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connect to MySQL successfully');
  } catch (error) {
    console.log('Failed to connect to MySQL');
  }
})();

app.use('/api/v1/customer', customerRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
