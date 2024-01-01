'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key:'id'},
      },
      reportedUserId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key:'id'},
      },
      reportedBookId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Books', key:'id'},
      },
      isBook: {
        type: Sequelize.BOOLEAN
      },
      content: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Reports');
  }
};