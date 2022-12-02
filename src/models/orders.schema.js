'use strict'


module.exports = (sequelizeDataBase, DataTypes) => sequelizeDataBase.define('orders', {
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});
