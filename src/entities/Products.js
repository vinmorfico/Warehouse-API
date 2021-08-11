const { Model } = require('objection');

class Products extends Model {
  static get tableName() {
    return 'products';
  }
  static get relationMappings() {
    const Category = require('./Category');
    const Users = require('./Users');
    return {
      category: {
        relation: Model.HasOneRelation,
        modelClass: Category,
        join: {
          from: 'products.category_id',
          to: 'products_category.id',
        },
      },
      users: {
        relation: Model.HasOneRelation,
        modelClass: Users,
        join: {
          from: 'products.users_id',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = Products;
