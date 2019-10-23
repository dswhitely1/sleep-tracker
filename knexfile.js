// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    ssl: true,
    migrations: {
      directory: "./data/migrations/"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true,
    pool: { min: 2, max: 10 }
  },

  testing: {
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_CHARCOAL_URL,
    ssl: true,
    migrations: {
      directory: "./data/migrations/"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true,
    pool: { min: 2, max: 10 }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations/"
    },
    seeds: {
      directory: "./data/seeds/"
    },
    useNullAsDefault: true
  }
};
