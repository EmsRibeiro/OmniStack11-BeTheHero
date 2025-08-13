const knex = require("knex");
const config = require("../../knexfile"); // caminho partindo de src/database

const connection = knex(config.development); // usa o bloco "development" do knexfile
module.exports = connection;