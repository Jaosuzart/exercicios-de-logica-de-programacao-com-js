exports.up = function (knex) {
  return knex.schema.createTable('editora', function (table) {
    table.increments('id');
    table.string('nome').notNullable();
    table.string('cidade');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('editora');
};
