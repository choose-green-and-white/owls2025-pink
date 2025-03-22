'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Results.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Results.init({
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Results',
  });
  return Results;
};