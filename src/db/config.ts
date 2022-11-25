import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), `${process.env.NODE_ENV!}.env`)
});

module.exports = {
  development: {
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
  },
  production: {
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
  }
};
