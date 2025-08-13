/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ONGs", function (table) {
    // criando tabela, coluna id sera a PK, sem o return a tabela não é criada
    table.string("id").primary();
    table.string("name").notNullable(); // não pode ser Nulo
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable(); // limitado a 2 caracteres
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // if erro then deleta a table ONGs
  return knex.schema.dropTable("ONGs");
};
