import { Model } from 'objection';
import Category from './Category';
import Users from './Users';

class Products extends Model {
  static get tableName() {
    return 'products';
  }
  static get relationMappings() {
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

export default Products;
