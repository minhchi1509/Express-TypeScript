import { Sequelize } from 'sequelize';
import env from './env.config';

const sequelize = new Sequelize({
  database: env.DB_NAME,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  dialect: 'mysql'
});

export default sequelize;
