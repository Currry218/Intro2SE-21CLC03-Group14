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
      Book.belongsTo(models.User, {
        foreignKey: 'ownerId'
      });    
      Book.hasMany(models.Review, {
        foreignKey: {
          name: 'bookId',
          allowNull: true,
        },
        sourceKey: 'reviews',
        constraints: false,
      });    
      Book.hasMany(models.Report, {
        foreignKey: {
          name: 'reportedBookId',
          allowNull: true,
        }
      });    
    }
  }
  Book.init({
    title: DataTypes.STRING,
    owner: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    filePath: DataTypes.STRING,
    imgData: DataTypes.BLOB,
    pdfData: DataTypes.BLOB,
    price: DataTypes.DECIMAL,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    isVerified: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    buyer: DataTypes.ARRAY(DataTypes.INTEGER),
    reviews: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};