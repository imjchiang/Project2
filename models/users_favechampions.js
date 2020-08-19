'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_favechampions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_favechampions.init({
    userId: DataTypes.INTEGER,
    fave_championId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_favechampions',
  });
  return users_favechampions;
};