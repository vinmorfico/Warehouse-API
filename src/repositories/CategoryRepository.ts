import { PartialModelObject } from 'objection';
import Category from '../entities/Category';
import ICategory from '../interfaces/Category.interface';

class CategoryRepository {
  createNewCategory(query: ICategory) {
    return Category.query().insert({
      name: query.name,
    } as PartialModelObject<Category>);
  }

  deleteCategory(id: string) {
    return Category.query().deleteById(id);
  }

  getAllCategory() {
    return Category.query();
  }

  getCategoryById(id: string) {
    return Category.query().findById(id).withGraphFetched('products');
  }

  updateCategory(id: string, query: ICategory) {
    return Category.query().patchAndFetchById(id, {
      name: query.name,
    } as PartialModelObject<Category>);
  }
}

export default CategoryRepository;
