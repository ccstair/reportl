exports.seed = (knex, Promise) => {
  const tableName = 'gradeable_objects_types';
  const data = [
    {
      id: 1,
      name: 'exam',
    },
    {
      id: 2,
      name: 'quiz',
    },
    {
      id: 3,
      name: 'homework',
    },
    {
      id: 4,
      name: 'essay',
    },
    {
      id: 5,
      name: 'presentation',
    },
  ];

  return knex(tableName).del()
    .then(() => Promise.all(data.map(gradeableObject => knex(tableName).insert(gradeableObject))));
};
