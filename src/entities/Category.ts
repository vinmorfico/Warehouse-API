import { Model } from 'objection';
import Products from './Products';

class Category extends Model {
  static get tableName() {
    return 'products_category';
  }
  static get relationMappings() {
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

export default Category;
