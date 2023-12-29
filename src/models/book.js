'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User);
    }
  }
  Book.init({
    bookId: DataTypes.STRING,
    title: DataTypes.STRING,
    owner: DataTypes.STRING,
    author: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.TEXT,
    buyer: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};