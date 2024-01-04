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
      bookId:1,
      content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nesciunt repellat totam voluptas dolores quae amet architecto incidunt nostrum corrupti? Accusantium blanditiis vel recusandae adipisci eligendi. Debitis excepturi molestias obcaecati!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 3,
      bookId: 2,
      content: 'A captivating read that kept me on the edge of my seat! Highly recommended.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      bookId: 3,
      content: 'The prose in this book is exceptional, and the storyline is thought-provoking.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 5,
      bookId: 4,
      content: 'An enjoyable read with well-developed characters and a surprising twist!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      bookId: 5,
      content: 'The author\'s writing style is engaging, making it hard to put the book down.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      bookId: 6,
      content: 'Immersive storytelling and a fantastic plot! Can\'t wait for the sequel.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 6,
      bookId: 7,
      content: 'Kept me guessing until the very end. A must-read for thriller lovers!',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 7,
      bookId: 8,
      content: 'Our book club thoroughly enjoyed discussing the themes in this novel.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 24,
      bookId: 13,
      content: 'The beginning of a magical journey.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 17,
      bookId: 5,
      content: 'Magical realism at its finest.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 35,
      bookId: 7,
      content: 'Inspiring and philosophical journey.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 40,
      bookId: 10,
      content: 'Immersive world-building and memorable characters.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      bookId: 20,
      content: 'A captivating story with deep characters.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 14,
      bookId: 1,
      content: 'A powerful drama that stays with you.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 9,
      bookId: 20,
      content: 'A captivating story with deep characters.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 6,
      bookId: 12,
      content: 'A chilling exploration of a dystopian future.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 8,
      bookId: 10,
      content: 'Immersive world-building and memorable characters.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 40,
      bookId: 4,
      content: 'Emotional and beautifully written.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 35,
      bookId: 10,
      content: 'Immersive world-building and memorable characters.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 9,
      bookId: 11,
      content: 'Provocative and unsettling, a must-read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 40,
      bookId: 16,
      content: 'Charming and witty, a delightful read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 10,
      bookId: 15,
      content: 'Epic adventure filled with magic and wonder.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 23,
      bookId: 11,
      content: 'Provocative and unsettling, a must-read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 8,
      bookId: 18,
      content: 'Thought-provoking and beautifully written.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 18,
      bookId: 12,
      content: 'A chilling exploration of a dystopian future.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 33,
      bookId: 4,
      content: 'Emotional and beautifully written.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 1,
      bookId: 4,
      content: 'Emotional and beautifully written.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 11,
      bookId: 7,
      content: 'Inspiring and philosophical journey.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 35,
      bookId: 5,
      content: 'Magical realism at its finest.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 4,
      bookId: 13,
      content: 'The beginning of a magical journey.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 14,
      bookId: 16,
      content: 'Charming and witty, a delightful read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 26,
      bookId: 12,
      content: 'A chilling exploration of a dystopian future.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 8,
      bookId: 11,
      content: 'Provocative and unsettling, a must-read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 22,
      bookId: 8,
      content: 'Intriguing mix of history, art, and mystery.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 21,
      bookId: 4,
      content: 'Emotional and beautifully written.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 33,
      bookId: 12,
      content: 'A chilling exploration of a dystopian future.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 11,
      bookId: 2,
      content: 'Timeless classic that never gets old.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 11,
      bookId: 11,
      content: 'Provocative and unsettling, a must-read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 5,
      bookId: 20,
      content: 'A captivating story with deep characters.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 2,
      bookId: 11,
      content: 'Provocative and unsettling, a must-read.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 18,
      bookId: 9,
      content: 'Keeps you on the edge of your seat until the end.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 39,
      bookId: 9,
      content: 'Keeps you on the edge of your seat until the end.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 26,
      bookId: 9,
      content: 'Keeps you on the edge of your seat until the end.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 13,
      bookId: 3,
      content: 'Hilarious and thought-provoking satire.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 19,
      bookId: 6,
      content: 'A spine-tingling horror masterpiece.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 20,
      bookId: 3,
      content: 'Hilarious and thought-provoking satire.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 14,
      bookId: 1,
      content: 'A powerful drama that stays with you.',
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
    },
    {
      userId: 1,
      bookId: 5,
      content: 'Magical realism at its finest.',
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
