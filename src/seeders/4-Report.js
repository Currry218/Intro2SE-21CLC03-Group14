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
      username: 'user',
      reportedId:1,
      isBook:false,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 2,
      username: 'user',
      reportedId:7,
      isBook:false,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 3,
      username: 'premiumUser',
      reportedId: 2,
      isBook: true,
      content: 'I found some inappropriate content in this book. Please review.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      username: 'bookLover',
      reportedId: 3,
      isBook: false,
      content: 'I encountered a user with inappropriate behavior. Please take action.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 5,
      username: 'avidReader',
      reportedId: 4,
      isBook: true,
      content: 'This book seems to have a spoiler in the reviews. Please address.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {

      userId: 6,
      username: 'fantasyLover',
      reportedId: 5,
      isBook: false,
      content: 'The reported user is spamming unrelated content. Please investigate.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 7,
      username: 'budgetReader',
      reportedId: 6,
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
