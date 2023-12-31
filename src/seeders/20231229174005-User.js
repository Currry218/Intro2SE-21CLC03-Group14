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
     await queryInterface.bulkInsert('Users', [{
      //1
        username: 'admin',
        password: '1',
        email: 'admin@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: true,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        //2
        username: 'user',
        password: '1',
        email: 'user@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
     }, 
      {
        //3
        username: 'premiumUser',
        password: 'pass123',
        email: 'premium@gmail.com',
        balance: 50.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        //4
        username: 'bookLover',
        password: 'readBooks',
        email: 'booklover@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        //5
        username: 'avidReader',
        password: 'reader123',
        email: 'avidreader@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [1, 2, 3],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        //6
        username: 'fantasyLover',
        password: 'fantasyPass',
        email: 'fantasylover@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        //7
        username: 'budgetReader',
        password: 'budgetPass',
        email: 'budgetreader@gmail.com',
        balance: 10.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        username: 'historyBuff',
        password: 'h1st0ry',
        email: 'historybuff@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        username: 'platinumUser',
        password: 'plat1num',
        email: 'platinum@gmail.com',
        balance: 100.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        username: 'collectorReader',
        password: 'c0ll3ct0r',
        email: 'collectorreader@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [4, 5, 6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        username: 'sciFiFan',
        password: 's@tUrN',
        email: 'scififan@gmail.com',
        balance: 0.0,
        imagePath: '',
        isAdmin: false,
        wishlist: [1, 2, 3],
        boughtBooks: [0],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      } 
    ],
     {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});  

  }
};
