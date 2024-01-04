'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true, // Add unique constraint to id
      },
      username: {
        allowNull: false,
        primaryKey: true,
        unique: true, // Add unique constraint to username
        type: Sequelize.STRING,
      },      
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.DECIMAL,
        defaultValue: 0.0,
      },
      imagePath: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      wishlist: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      cart: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      boughtBooks: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};