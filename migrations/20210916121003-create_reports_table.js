'use strict';

const tableModel = { tableName: 'reports' };
const venueModel = { tableName: 'venues' };
const beerModel = { tableName: 'beers' };
const userModel = { tableName: 'users' }


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
        VenueId: { type: Sequelize.INTEGER, onUpdate: 'CASCADE', onDelete: 'CASCADE', references: {
          model: venueModel,
          key: 'Id',
          as: 'VenueId'
        }},
        BeerId: { type: Sequelize.INTEGER, onUpdate: 'CASCADE', onDelete: 'CASCADE', references: {
          model: beerModel,
          key: 'Id',
          as: 'BeerId'
        }},
        UserId: { type: Sequelize.INTEGER, onUpdate: 'CASCADE', onDelete: 'CASCADE', references: {
          model: userModel,
          key: 'Id',
          as: 'UserId'
        }},
        Price: { type: Sequelize.FLOAT, allowNull: true },
        Rating: { type: Sequelize.FLOAT, allowNull: true },
        Review: { type: Sequelize.STRING, allowNull: true }

      }, { transaction });

      // 2. Adding the Indices

      await queryInterface.addIndex (tableModel, ['Id'], { transaction });

      // 3. Commiting the transaction

      await transaction.commit ();

    } catch (error) {
      await transaction.rollback ()
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
