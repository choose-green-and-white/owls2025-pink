'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enemies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enemies.init({
    skin: DataTypes.TEXT,
    speed: DataTypes.INTEGER,
    survivability: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enemies',
  });
  return Enemies;
};