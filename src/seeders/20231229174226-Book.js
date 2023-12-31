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
      isVerified: true,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      buyer: [2,5,6],
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
     }, {
      title:'Two Pieces',
      owner:'KimDong',
      ownerId:1,
      author:'Oda',
      imagePath:'',
      price:16,
      tags: ['Comedy', 'Action', 'Fantasy'],
      isVerified: true,
      description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      buyer:[2,5,6],
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
     },
     {
      title: 'Naruto',
      owner: 'VizMedia',
      ownerId: 2,
      author: 'Masashi Kishimoto',
      imagePath: '',
      price: 20,
      tags: ['Action', 'Adventure'],
      isVerified: true,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      buyer: [2,5,6],
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'Harry Potter',
        owner: 'Scholastic',
        ownerId: 3,
        author: 'J.K. Rowling',
        imagePath: '',
        price: 25,
        tags: ['Fantasy', 'Magic'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'The Hunger Games',
        owner: 'Suzanne Collins',
        ownerId: 2,
        author: 'Suzanne Collins',
        imagePath: '',
        price: 18,
        tags: ['Dystopian', 'Adventure'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'Lord of the Rings',
        owner: 'HarperCollins',
        ownerId: 1,
        author: 'J.R.R. Tolkien',
        imagePath: '',
        price: 30,
        tags: ['Fantasy', 'Adventure'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'Game of Thrones',
        owner: 'Bantam Books',
        ownerId: 3,
        author: 'George R.R. Martin',
        imagePath: '',
        price: 28,
        tags: ['Fantasy', 'Drama'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'Dune',
        owner: 'Ace Books',
        ownerId: 3,
        author: 'Frank Herbert',
        imagePath: '',
        price: 22,
        tags: ['Science Fiction', 'Adventure'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'The Great Gatsby',
        owner: 'Scribner',
        ownerId: 8,
        author: 'F. Scott Fitzgerald',
        imagePath: '',
        price: 15,
        tags: ['Classic', 'Romance'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },    
      {
        title: 'To Kill a Mockingbird',
        owner: 'Harper Lee',
        ownerId: 7,
        author: 'Harper Lee',
        imagePath: '',
        price: 17,
        tags: ['Classic', 'Drama'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
        createdAt: Sequelize.literal('NOW()'),
        updatedAt: Sequelize.literal('NOW()'),
      },
      {
        title: 'The Catcher in the Rye',
        owner: 'J.D. Salinger',
        ownerId: 5,
        author: 'J.D. Salinger',
        imagePath: '',
        price: 19,
        tags: ['Classic', 'Coming of Age'],
        isVerified: true,
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        buyer: [2,5,6],
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
