exports.up = knex => knex.schema.createTable('gradeable_objects_types', (table) => {
  table.increments('id').primary();
  table.string('name').unique();
  table.timestamps(true, true);
})
.then(() => knex.schema.table('gradeable_objects', (table) => {
  table.integer('type_id').unsigned();
  table.foreign('type_id').references('gradeable_objects_types.id');
}));

exports.down = knex => knex.schema.table('gradeable_objects', (table) => {
  table.dropForeign('type_id');
  table.dropColumn('type_id');
})
.then(() => knex.schema.dropTable('gradeable_objects_types'));
