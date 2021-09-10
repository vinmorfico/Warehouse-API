import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', (p) => {
    p.increments('id');
    p.string('name');
    p.text('description');
    p.decimal('price');
    p.integer('amount_left');
    p.integer('category_id').references('id').inTable('products_category');
    p.integer('users_id').references('id').inTable('users');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products');
}
