# sequelize-migrate-tools
Write sequelize migrations faster

# Usage

`addColumnsMigration` handles adding and removing columns by returning both `up` and `down` keys.

```js
const { dropColumnsMigration } = require('../helpers/dropColumnsMigration')

const Sequelize = require("sequelize")

module.exports = addColumnsMigration('users', {
  address: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
})
```
