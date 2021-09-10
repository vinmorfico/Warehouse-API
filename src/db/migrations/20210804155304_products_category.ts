import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products_category', (c) => {
    c.increments('id');
    c.string('name');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products_category');
}
