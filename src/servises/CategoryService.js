class CategoryService {
  constructor(CategoryRepository) {
    this.categoryRepo = CategoryRepository;
  }

  createNewCategory(query) {
    return this.categoryRepo.createNewCategory(query);
  }

  deleteCategory(id) {
    return this.categoryRepo.deleteCategory(id);
  }
  getAllCategory() {
    return this.categoryRepo.getAllCategory();
  }
  getCategoryById(id) {
    return this.categoryRepo.getCategoryById(id);
  }
  updateCategory(id, query) {
    return this.categoryRepo.updateCategory(id, query);
  }
}

module.exports = CategoryService;
