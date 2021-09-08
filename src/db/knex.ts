import { knex } from 'knex';
import { Model } from 'objection';
import knexfile from '../../knexfile';

function setupDb() {
  const db = knex(knexfile);
  Model.knex(db);
}

export default setupDb;
