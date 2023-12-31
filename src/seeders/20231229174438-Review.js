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
      userId: 2,
      username: 'user',
      bookId:1,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nesciunt repellat totam voluptas dolores quae amet architecto incidunt nostrum corrupti? Accusantium blanditiis vel recusandae adipisci eligendi. Debitis excepturi molestias obcaecati!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 3,
      username: 'premiumUser',
      bookId: 2,
      content: 'A captivating read that kept me on the edge of my seat! Highly recommended.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      username: 'bookLover',
      bookId: 3,
      content: 'The prose in this book is exceptional, and the storyline is thought-provoking.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 5,
      username: 'avidReader',
      bookId: 4,
      content: 'An enjoyable read with well-developed characters and a surprising twist!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      username: 'bookLover',
      bookId: 5,
      content: 'The author\'s writing style is engaging, making it hard to put the book down.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      username: 'bookLover',
      bookId: 6,
      content: 'Immersive storytelling and a fantastic plot! Can\'t wait for the sequel.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 6,
      username: 'fantasyLover',
      bookId: 7,
      content: 'Kept me guessing until the very end. A must-read for thriller lovers!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 7,
      username: 'sciFiFan',
      bookId: 8,
      content: 'Our book club thoroughly enjoyed discussing the themes in this novel.',
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', null, {});  

  }
};
