const { Category } = require('../entities/Category');

class CategoryRepository {
  async createNewCategory(category) {
    return Category.query().insert(category);
  }
  async deleteCategory(id) {
    return Category.query().deleteById(id);
  }
  async getAllCategory() {
    return Category.query();
  }
  async getCategoryById(id) {
    return Сategory
      .query()
      .findById(id)
      .withGraphFetched('products');
  }
  async updateCategory() {
    return Category.query().patchAndFetchById(id, category);
  }
}

module.exports = CategoryRepository;
