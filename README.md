# sequelize-migrate-tools
Write sequelize migrations faster

# Usage

```js
const { dropColumnsMigration } = require('../helpers/dropColumnsMigration')

const Sequelize = require("sequelize")

module.exports = dropColumnsMigration('users', {
  address: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
})

module.exports = addColumnsMigration('users', {
  address: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
})
```
