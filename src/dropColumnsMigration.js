const _ = require("lodash");

const { addColumnIfNotExists } = require('./addColumnIfNotExists');

const dropColumnsMigration = (tableName, columns) => {
  return {
    up: (queryInterface, Sequelize) => {
      return Promise.all(Object.keys(columns).map((columnName) => {
        return queryInterface.removeColumn(tableName, columnName);
      }));
    },
    down: (queryInterface, Sequelize) => {
      return Promise.all(_.map(columns, (options, columnName) => {
        return addColumnIfNotExists(queryInterface, tableName, columnName, options);
      }));
    },
  };
};

module.exports = {
  dropColumnsMigration
}
