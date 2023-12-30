'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsTo(models.User);    
    }
  }
  Report.init({
    username: DataTypes.STRING,
    reportedId: DataTypes.INTEGER,
    isBook: DataTypes.BOOLEAN,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};