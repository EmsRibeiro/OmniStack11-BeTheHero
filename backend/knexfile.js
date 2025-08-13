// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {filename: "./src/database/db.sqlite"},
    migrations: {directory: "./src/database/migrations"},
    useNullAsDefault: true,
  },

  staging: {
    // produção para o desenvolvimento
    client: "sqlite3",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      // historico das tabelas, alteração, adição, mostra a atividade
      tableName: "knex_migrations",
    },
  },
};
