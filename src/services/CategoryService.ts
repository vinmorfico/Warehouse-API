import ICategory from '../interfaces/Category.interface';
import CategoryRepository from '../repositories/CategoryRepository';

class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository | any) {}

  createNewCategory(query: ICategory) {
    return this.categoryRepo.createNewCategory(query);
  }
  deleteCategory(id: string) {
    return this.categoryRepo.deleteCategory(id);
  }
  getAllCategory() {
    return this.categoryRepo.getAllCategory();
  }
  getCategoryById(id: string) {
    return this.categoryRepo.getCategoryById(id);
  }
  updateCategory(id: string, query: ICategory) {
    return this.categoryRepo.updateCategory(id, query);
  }
}

export default CategoryService;