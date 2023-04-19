import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'mydb',
  username: 'minhchi1509',
  password: 'ptit_15092002',
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
