exports.seed = (knex, Promise) => {
  const tableName = 'graph_data';
  const data = [];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))));
};
