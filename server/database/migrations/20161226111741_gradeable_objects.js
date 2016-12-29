exports.up = knex => knex.schema.createTable('gradeable_objects', (table) => {
  table.increments('id').primary();
  table.string('object_name').unique();
  table.integer('duration');
  table.bool('recurs');
  table.integer('recur_total');
  table.string('filename');
  table.decimal('%_of_module_grade', 4);
  table.integer('module_id').unsigned();
  table.foreign('module_id').references('modules.id');
});

exports.down = knex => knex.schema.dropTable('gradeable_objects');
