const { Model } = require('objection');

class Products extends Model {
  static get tableName() {
    return 'products';
  }
  static get relationMappings() {
    const Products_category = require('./Products_category');
    const Users = require('./Users');
    return {
      products_category: {
        relation: Model.HasOneRelation,
        modelClass: Products_category,
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
