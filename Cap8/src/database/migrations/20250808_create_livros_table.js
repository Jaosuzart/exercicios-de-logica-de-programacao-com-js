exports.up = function (knex) {
  return knex.schema.createTable("livros", (table) => {
    table.increments('id').primary();
    table.string('titulo').notNullable();
    table.string('autor').notNullable();
    table.string('isbn').notNullable();
    table.decimal("preco", 10, 2).unsigned();
    table.integer("ano_publicacao").unsigned();
    table.index(["titulo", "autor"]);
    table.unique("isbn");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("livros");
};
