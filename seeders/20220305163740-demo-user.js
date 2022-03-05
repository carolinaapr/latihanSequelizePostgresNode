'use strict';

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

     queryInterface.bulkInsert('users', [
      {
      id: 1,
      firstName: 'Fauzi',
      lastName: 'Faruq',
      email: 'fauzi@gmail.com',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      firstName: 'Faisal',
      lastName: 'Faruq',
      email: 'faisal@gmail.com',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
