const { Model } = require('objection');

class Users extends Model {
  
  static get tableName() {
    return 'users';
  }
  static get relationMappings() {
    const Products = require('./Products');
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

module.exports = Users;
