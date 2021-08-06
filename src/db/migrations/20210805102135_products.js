exports.up = function (knex) {
  return knex.schema.createTable('products', (p) => {
    p.increments('id');
    p.string('name').notNull();
    p.text('description').notNull();
    p.decimal('price').notNull();
    p.integer('amount_left').notNull();
    p.integer('category_id').references('id').inTable('products_category');
    p.integer('users_id').references('id').inTable('users');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
