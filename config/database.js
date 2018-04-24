require('dotenv').config();

const database = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host:  process.env.DATABASE_HOST,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    underscored:true
  },
  test: {
    username: process.env.DATABASE_USERNAME_TEST || 'postgres',
    password: process.env.DATABASE_PASSWORD_TEST || 'root',
    database: process.env.DATABASE_NAME_TEST || 'test',
    host: process.env.DATABASE_HOST_TEST || '0.0.0.0',
    dialect: 'postgres',
    pool: {
      max: process.env.POLL_MAX || 10,
      min: process.env.POLL_MIN || 5,
      idle: 10000
    },
    underscored:true
  },
  production: {
    username: process.env.DATABASE_USERNAME_PRO,
    password: process.env.DATABASE_PASSWORD_PRO,
    database: process.env.DATABASE_NAME_PRO,
    host: process.env.DATABASE_HOST_PRO,
    dialect: 'postgres',
    pool: {
      max: 10,
      min:  5,
      idle: 30000
    },
    underscored:true
  }
};

module.exports = database;
