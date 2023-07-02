import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';

import sequelize from '@/configs/sequelize.config';

import env from './configs/env.config';
import customerRoute from './routes/customer.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connect to database successfullyy');
  } catch (error) {
    console.log('Failed to connect to database');
  }
})();

app.use('/api/v1/customer', customerRoute);

void sequelize.sync();

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
