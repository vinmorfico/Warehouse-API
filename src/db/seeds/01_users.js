exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'Vasya', login: 'qwerty234', password: 'qwerty234' },
        { name: 'Bodya', login: 'qwerty1231', password: 'qwerty1231' },
        { name: 'Ruslan', login: 'qwerty123', password: 'qwerty123' },
      ]);
    });
};
