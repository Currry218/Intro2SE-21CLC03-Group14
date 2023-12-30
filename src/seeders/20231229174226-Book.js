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
    await queryInterface.bulkInsert('Books', [{
      title:'One Piece',
      owner:'KimDong',
      ownerId:1,
      author:'Oda',
      imagePath:'',
      price:16,
      tags: ['Comedy', 'Action', 'Fantasy'],
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      buyer:[''],
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
     }], [{
      title:'Two Pieces',
      owner:'KimDong',
      ownerId:1,
      author:'Oda',
      imagePath:'',
      price:16,
      tags: ['Comedy', 'Action', 'Fantasy'],
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      buyer:[''],
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
     }],
     {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {});  

  }
};
