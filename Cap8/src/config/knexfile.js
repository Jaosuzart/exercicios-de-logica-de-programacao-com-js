const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, '..', 'database', 'database.sqlite')
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, '..', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, '..', 'database', 'seeds')
    }
  }
};
