const { Model } = require('objection');

class Products_category extends Model {
  static get tableName() {
    return 'products_category';
  }
  static get relationMappings() {
    const Products = require('./Products');
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Products,
        join: {
          from: 'products_category.id',
          to: 'products.category_id',
        },
      },
    };
  }
}

module.exports = Products_category;
