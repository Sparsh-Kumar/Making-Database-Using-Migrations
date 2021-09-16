'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // UNCOMMENT THIS GIVEN BELOW PIECE OF CODE IF YOU ARE MAKING USE OF SOME ANOTHER RELATIONAL DATABASE EXCEPT MYSQL.
    // AS IN MYSQL SCHEMA AND DATABASES ARE ALMOST SAME

    //await queryInterface.createSchema ('app') // if you are making use of mysql then don't create the schema just start creating the database and tables.

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
        // UNCOMMENT THIS GIVEN BELOW PIECE OF CODE IF YOU ARE MAKING USE OF SOME ANOTHER RELATIONAL DATABASE EXCEPT MYSQL.
    // AS IN MYSQL SCHEMA AND DATABASES ARE ALMOST SAME
    
    //await queryInterface.dropSchema ('app')  // if you are making use of mysql then don't create the schema just start creating the database and tables.
    
  }
};
