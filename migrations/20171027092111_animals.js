
exports.up = function(knex, Promise) {
  return knex.schema.createTable('animals', function(table){
    table.increments();  // ID column
    table.string('name');
    table.string('species');
    table.string('gender');
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('animals');
};
