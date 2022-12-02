'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } =  require('sequelize');
const gamesSchema = require('./games.schema');
const carsSchema = require('./cars.schema');
const ModelInterface = require('./modelInterface')
const orderSchema = require('./orders.schema')
//  'postgres://localhost:5432/basic-api-app
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory:'
  : process.env.DATABASE_URL;
// const DATABASE_URL = process.env.DATABASE_URL
// instantiate our sequelize connection to our database
const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const carsModel = carsSchema(sequelizeDatabase, DataTypes);
const gamesModel = gamesSchema(sequelizeDatabase, DataTypes);
const orderModel =  orderSchema(sequelizeDatabase, DataTypes)


//  relations added between customers and orders
// gamesModel.hasMany(orderModel);
// orderModel.belongsTo(gamesModel);
module.exports = {
  sequelizeDatabase,
  gamesInterface: new ModelInterface(gamesModel),
  carsInterface: new ModelInterface(carsModel),
orderInterface: new ModelInterface(orderModel),
};



