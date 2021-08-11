const { Model } = require('objection');

class Category extends Model {
  static get tableName() {
    return 'category';
  }
  static get relationMappings() {
    const Products = require('./Products');
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Products,
        join: {
          from: 'category.id',
          to: 'products.category_id',
        },
      },
    };
  }
}

module.exports = Category;
