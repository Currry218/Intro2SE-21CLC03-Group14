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
      userId: 2,
      reportedBookId: null,
      reportedUserId: 1,
      isBook:false,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 2,
      reportedBookId: null,
      reportedUserId: 7,
      isBook:false,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 3,
      reportedBookId: 2,
      reportedUserId: null,
      isBook: true,
      content: 'I found some inappropriate content in this book. Please review.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      reportedBookId: null,
      reportedUserId: 3,
      isBook: false,
      content: 'I encountered a user with inappropriate behavior. Please take action.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 5,
      reportedBookId: 4,
      reportedUserId: null,
      isBook: true,
      content: 'This book seems to have a spoiler in the reviews. Please address.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {

      userId: 6,
      reportedBookId: null,
      reportedUserId: 5,
      isBook: false,
      content: 'The reported user is spamming unrelated content. Please investigate.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 7,
      reportedBookId: 6,
      reportedUserId: null,
      isBook: true,
      content: 'This book review seems to contain offensive language. Please take a look.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    }
  ], {});
 
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
