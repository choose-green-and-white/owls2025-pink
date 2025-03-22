'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Alex',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sasha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pasha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
