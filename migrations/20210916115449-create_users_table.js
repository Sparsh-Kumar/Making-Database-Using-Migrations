'use strict';

const tableModel = { tableName: 'users' };

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    const transaction = await queryInterface.sequelize.transaction ();

    try {

      // 1. Creating the table

      await queryInterface.createTable (tableModel, {
        
        Id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        Created: { type: Sequelize.DATE, allowNull: false, defaultValue: new Date () },
        Modified: { type: Sequelize.DATE, allowNull: false, defaultValue: new Date () },
        Username: { type: Sequelize.STRING, allowNull: false },
        Password: { type: Sequelize.STRING, allowNull: false }

      }, { transaction });

      // 2. Creating the Indices
      
      await queryInterface.addIndex (tableModel, ['Id'], { transaction });
      await queryInterface.addIndex (tableModel, ['Username'], { transaction });

      // 3. Commit the transaction

      await transaction.commit ();

    } catch (error) {
      
      await transaction.rollback ();
      throw error;

    }

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable (tableModel);
  }
};
