'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      pdfData: {
        type: Sequelize.BLOB, // 'long' indicates a BLOB column
        allowNull: true, // or false, depending on your requirements
      },
      imgData: {
        type: Sequelize.BLOB, // 'long' indicates a BLOB column
        allowNull: true, // or false, depending on your requirements
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key:'id'},
      },
      author: {
        type: Sequelize.STRING
      },
      imagePath: {
        type: Sequelize.STRING
      },
      filePath: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL,
        defaultValue: 0.0,
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      description: {
        type: Sequelize.TEXT
      },
      buyer: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      reviews: {
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
    await queryInterface.dropTable('Books');
  }
};