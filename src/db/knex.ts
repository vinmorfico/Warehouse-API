import { Model } from 'objection';
import Knex from 'knex';
import knexfile from '../../knexfile';

async function setupDb() {
  const knex = Knex(knexfile);
  Model.knex(knex);
}

export default setupDb;
