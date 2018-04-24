import {Sequelize} from 'sequelize-typescript';
import {Pet} from '../server/models/pet';
import {Order} from '../server/models/order';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'hackathon_pet',
  username: 'postgres',
  password: '123456',
  modelPaths: ['../server/models']
});

sequelize.addModels([Pet, Order]);