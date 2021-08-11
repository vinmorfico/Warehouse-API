class CategoryService {
  constructor(CategoryRepository) {
    this.categoryRepo = CategoryRepository;
  }

  async createNewCategory(query) {
    return await this.categoryRepo.createNewCategory(query);
  }

  async deleteCategory(id) {
    return await this.categoryRepo.deleteCategory(id);
  }
  async getAllCategory() {
    return await this.categoryRepo.getAllCategory();
  }
  async getCategoryById(id) {
    return await this.categoryRepo.getCategoryById(id);
  }
  async updateCategory(id, query) {
    return await this.categoryRepo.updateCategory(id, query);
  }
}

module.exports = CategoryService;
