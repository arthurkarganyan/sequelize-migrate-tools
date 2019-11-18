const { addColumnIfNotExists } = require('./addColumnIfNotExists');

const dropColumnsMigration = (tableName, columns) => {
  return {
    up: (queryInterface, Sequelize) => {
      return Promise.all(Object.keys(columns).map((columnName) => {
        return queryInterface.removeColumn(tableName, columnName);
      }));
    },
    down: (queryInterface, Sequelize) => {
      return Promise.all(Object.keys(columns).map((columnName) => {
        return addColumnIfNotExists(queryInterface, tableName, columnName, column[columnName]);
      }));
    },
  };
};

module.exports = {
  dropColumnsMigration
}
