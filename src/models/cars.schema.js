'use strict'


module.exports = (sequelizeDataBase, DataTypes) => sequelizeDataBase.define('cars', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
});
