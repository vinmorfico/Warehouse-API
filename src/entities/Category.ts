import { Model } from 'objection';

export class Category extends Model {
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
