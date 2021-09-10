import { Model } from 'objection';
import Products from './Products';
class Users extends Model {
  static get tableName() {
    return 'users';
  }
  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Products,
        join: {
          from: 'users.id',
          to: 'products.users_id',
        },
      },
    };
  }
}

export default Users;
