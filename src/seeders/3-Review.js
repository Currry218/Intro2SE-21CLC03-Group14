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
    await queryInterface.bulkInsert('Reviews', [

      {
        userId: 37,
        bookId: 1,
        content: 'A captivating story with deep characters.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 37,
        bookId: 2,
        content: 'Couldn\'t put it down - a real page-turner!', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 37,
        bookId: 3,
        content: 'Thought-provoking and beautifully written.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 11,
        bookId: 4,
        content: 'Classic tale of love and societal expectations.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 14,
        bookId: 5,
        content: 'Charming and witty, a delightful read.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 38,
        bookId: 6,
        content: 'Epic adventure filled with magic and wonder.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 22,
        bookId: 7,
        content: 'Captures the imagination from start to finish.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 39,
        bookId: 8,
        content: 'The beginning of a magical journey.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 23,
        bookId: 9,
        content: 'A chilling exploration of a dystopian future.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 8,
        bookId: 10,
        content: 'Provocative and unsettling, a must-read.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 23,
        bookId: 11,
        content: 'Immersive world-building and memorable characters.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 14,
        bookId: 12,
        content: 'Keeps you on the edge of your seat until the end.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 37,
        bookId: 13,
        content: 'Intriguing mix of history, art, and mystery.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 20,
        bookId: 14,
        content: 'Inspiring and philosophical journey.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 37,
        bookId: 15,
        content: 'A spine-tingling horror masterpiece.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 17,
        bookId: 16,
        content: 'Magical realism at its finest.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 17,
        bookId: 17,
        content: 'Emotional and beautifully written.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 27,
        bookId: 18,
        content: 'Hilarious and thought-provoking satire.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 39,
        bookId: 19,
        content: 'Timeless classic that never gets old.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 11,
        bookId: 20,
        content: 'A powerful drama that stays with you.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 32,
        bookId: 21,
        content: 'A captivating story with deep characters.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 14,
        bookId: 22,
        content: 'Couldn\'t put it down - a real page-turner!', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 40,
        bookId: 23,
        content: 'Thought-provoking and beautifully written.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 17,
        bookId: 24,
        content: 'Classic tale of love and societal expectations.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 21,
        bookId: 25,
        content: 'Charming and witty, a delightful read.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 29,
        bookId: 26,
        content: 'Epic adventure filled with magic and wonder.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 19,
        bookId: 27,
        content: 'Captures the imagination from start to finish.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 33,
        bookId: 28,
        content: 'The beginning of a magical journey.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 26,
        bookId: 29,
        content: 'A chilling exploration of a dystopian future.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 41,
        bookId: 30,
        content: 'Provocative and unsettling, a must-read.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 29,
        bookId: 31,
        content: 'Immersive world-building and memorable characters.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 31,
        bookId: 1,
        content: 'Keeps you on the edge of your seat until the end.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 20,
        bookId: 2,
        content: 'Intriguing mix of history, art, and mystery.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 24,
        bookId: 3,
        content: 'Inspiring and philosophical journey.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 36,
        bookId: 4,
        content: 'A spine-tingling horror masterpiece.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 38,
        bookId: 5,
        content: 'Magical realism at its finest.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 37,
        bookId: 6,
        content: 'Emotional and beautifully written.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 36,
        bookId: 7,
        content: 'Hilarious and thought-provoking satire.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 36,
        bookId: 8,
        content: 'Timeless classic that never gets old.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        userId: 38,
        bookId: 9,
        content: 'A powerful drama that stays with you.', 
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
  ], {});
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
