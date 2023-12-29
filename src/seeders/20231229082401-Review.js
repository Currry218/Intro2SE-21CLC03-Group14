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
    await queryInterface.bulkInsert('Reviews', [{
      username: 'user',
      bookId:'1',
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nesciunt repellat totam voluptas dolores quae amet architecto incidunt nostrum corrupti? Accusantium blanditiis vel recusandae adipisci eligendi. Debitis excepturi molestias obcaecati!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', null, {});  

  }
};
