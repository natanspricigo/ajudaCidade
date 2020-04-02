// Update with your config settings.

const dbConfig = require("./src/database/dbConfig");

const migrations = { directory: './src/database/migrations' }

module.exports = {

  development: {
    client: 'mysql',
    connection: dbConfig,
    migrations
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations
  }

};
