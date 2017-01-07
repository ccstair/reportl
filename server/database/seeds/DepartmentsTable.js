exports.seed = (knex, Promise) => {
  const tableName = 'departments';
  const data = [
    {
      id: 1,
      name: 'English',
    },
    {
      id: 2,
      name: 'Math',
    },
    {
      id: 3,
      name: 'Science',
    },
    {
      id: 4,
      name: 'Modern Languages',
    },
  ];

  return knex.raw('SET foreign_key_checks = 0;')
    .then(() => knex(tableName).del())
    .then(() => Promise.all(data.map(type => knex(tableName).insert(type))))
    .then(() => Promise.all())
    .finally(() => knex.raw('SET foreign_key_checks = 1;'));
};
