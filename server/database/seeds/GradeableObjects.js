// exports.seed = (knex, Promise) => {
//   const tableName = 'users';
//   const data = [
//     {
//       id: 1,
//       name: 'armyf35',
//       first_name: 'Sam',
//       last_name: 'Phillips',
//       email: 'armyf35@gmail.com',
//       type_id: 1,
//     },
//     {
//       id: 2,
//       name: 'mattie2',
//       first_name: 'Mattie',
//       last_name: 'Lents',
//       email: 'mattie@mattie.com',
//       type_id: 2,
//     },
//   ];
//
//   return knex(tableName).del()
//     .then(() => Promise.all(data.map(user => knex(tableName).insert(user))));
// };
