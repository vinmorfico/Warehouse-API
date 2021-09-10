import bcrypt from 'bcryptjs';
import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();
  return await knex('users').insert([
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
}
