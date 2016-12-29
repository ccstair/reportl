exports.up = knex => knex.schema.createTable('modules', (table) => {
  table.increments('id').primary();
  table.string('module_name').unique();
  table.timestamp('start_date').defaultTo(knex.fn.now());
  table.timestamp('end_date').defaultTo(knex.fn.now());
  table.decimal('%_of_grade', 4);
  table.integer('classes_id').unsigned();
  table.foreign('classes_id').references('classes.id');
});

exports.down = knex => knex.schema.dropTable('modules');
