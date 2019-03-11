const addColumnIfNotExists = async (queryInterface, tableName, columnName, options) => {
  const columns = Object.keys(await queryInterface.describeTable(tableName));
  if (columns.includes(columnName)) return;

  return queryInterface.addColumn(tableName, columnName, options);
};

module.exports = { addColumnIfNotExists };
