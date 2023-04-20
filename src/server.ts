import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import sequelize from '@/configs/sequelize.config';
import customerRoute from './routes/customer.route';
import env from './configs/env.config';

const app: Application = express();

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

void sequelize.sync();

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
