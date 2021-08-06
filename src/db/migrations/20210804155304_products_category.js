exports.up = function (knex) {
  return knex.schema.createTable('products_category', (c) => {
    c.increments('id');
    c.string('name').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products_category');
};
