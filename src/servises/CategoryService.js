const Category = require('../entities/Category');

class CategoryService {
  constructor(CategoryRepository) {
    this.categoryRepo = CategoryRepository;
  }

  async createNewCategory({ Category }) {
    // {Category} its instance of the class Category
    return await this.categoryRepo.createNewProduct({ Category });
  }

  async deleteCategory({ Category }) {
    return await this.categoryRepo.deleteProduct({ Category });
  }
  async getAllCategory() {
    return await this.categoryRepo.getAllProducts();
  }
  async getCategoryById({ Category }) {
    return await this.categoryRepo.getProductById({ Category });
  }
  async updateCategory({ Category }) {
    return await this.categoryRepo.updateProduct({ Category });
  }
}

module.exports = CategoryService;
