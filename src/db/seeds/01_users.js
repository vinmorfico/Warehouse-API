const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(async function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Vasya',
          login: 'qwerty234',
          password: await bcrypt.hash('qwerty234', 10),
        },
        {
          name: 'Bodya',
          login: 'qwerty1231',
          password: await bcrypt.hash('qwerty1231', 10),
        },
        {
          name: 'Ruslan',
          login: 'qwerty123',
          password: await bcrypt.hash('qwerty123', 10),
        },
      ]);
    });
};
