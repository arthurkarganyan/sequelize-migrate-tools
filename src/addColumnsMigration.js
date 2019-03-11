const { dropColumnsMigration } = require('./dropColumnsMigration');

const addColumnsMigration = (tableName, columns) => {
  const dropMigration = dropColumnsMigration(tableName, columns)

  return {
    up: dropMigration.down,
    down: dropMigration.up
  }
}

module.exports = {
  addColumnsMigration
}
