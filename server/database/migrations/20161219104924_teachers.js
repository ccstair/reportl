
exports.up = knex => knex.schema.createTable('teachers', (table) => {
  table.increments('id').primary();
  table.integer('user_id').unsigned();
  table.foreign('user_id').references('users.id');
  table.integer('department_id').unsigned();
});

exports.down = knex => knex.schema.dropTable('teachers');
