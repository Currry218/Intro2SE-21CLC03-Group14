'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Book, {
        foreignKey: 'ownerId'
      });
      User.hasMany(models.Book, {
        foreignKey: {
          name: 'id',
          allowNull: true,
        },
        sourceKey: 'wishlist',
        constraints: false,
      });    
      User.hasMany(models.Book, {
        foreignKey: {
          name: 'id',
          allowNull: true,
        },
        sourceKey: 'cart',
        constraints: false,
      });    
      User.hasMany(models.Book, {
        foreignKey: {
          name: 'id',
          allowNull: true,
        },
        sourceKey: 'boughtBooks',
        constraints: false,
      });    
      User.hasMany(models.Review, {
        foreignKey: 'userId'
      });
      User.hasMany(models.Report, {
        foreignKey: 'userId'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    balance: DataTypes.DECIMAL,
    imagePath: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    wishlist: DataTypes.ARRAY(DataTypes.INTEGER),
    cart: DataTypes.ARRAY(DataTypes.INTEGER),
    boughtBooks: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};