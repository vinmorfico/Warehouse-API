import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (u) => {
    u.increments('id');
    u.string('name');
    u.string('login');
    u.string('password');
    u.string('refreshToken');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
