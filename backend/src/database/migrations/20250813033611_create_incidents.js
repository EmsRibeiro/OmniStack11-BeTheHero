/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function (table) {
      // increments() gera aquela ID PK que se autoincrementa a cada row
      table.increments();
      table.string("title").notNullable(); // não pode ser Nulo
      table.string("description").notNullable();
      table.decimal("value").notNullable();

      table.string('ong_id').notNullable(); // relacionar à ONG
      table.foreign('ong_id').references('id').inTable('ongs') /*Chave estrangeira que referencia a ong_id com a id da table ONGs*/
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // em caso de erro, deleta a table incidents
  return knex.schema.dropTable("incidents"); 
};
