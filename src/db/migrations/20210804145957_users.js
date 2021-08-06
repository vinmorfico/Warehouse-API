exports.up = function (knex) {
  return knex.schema.createTable('users', (u) => {
    u.increments('id');
    u.string('name').notNull();
    u.string('login').notNull();
    u.string('password').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
