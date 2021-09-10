import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products_category').del();
  return await knex('products_category').insert([
    { name: 'fruits' },
    { name: 'vegetables' },
    { name: 'tools' },
  ]);
}
