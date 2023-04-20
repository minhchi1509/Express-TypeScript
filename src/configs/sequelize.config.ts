import { Sequelize } from 'sequelize';
import env from './env.config';

const sequelize = new Sequelize({
  database: env.DB_NAME,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: Number.parseInt(env.DB_PORT as string),
  dialect: 'mysql'
});

export default sequelize;
