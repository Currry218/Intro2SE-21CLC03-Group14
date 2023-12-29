'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Reports', [{
      username: 'user',
      reportedId:'1',
      isBook:false,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    }], {});
 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
    await queryInterface.bulkDelete('Reports', null, {});  
  }
};
