'use strict'


module.exports = (sequelizeDataBase, DataTypes) => sequelizeDataBase.define('games', {
  prodName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseDate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
});



