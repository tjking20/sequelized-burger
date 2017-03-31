'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('burgers',
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true
          },
          burger_name: {
              type: Sequelize.STRING,
              allowNull: false
          },
          devoured: {
              type: Sequelize.BOOLEAN,
              defaultValue: false,
              allowNull: false
          },
          law_created_at: {
              type: Sequelize.DATE,
              allowNull: false
          }
      });
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('burgers');
  }
};
