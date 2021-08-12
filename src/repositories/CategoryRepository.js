const Category = require('../entities/Category');

class CategoryRepository {

  async createNewCategory(query) {
    return Category.query().insert({
      name: query,
    });
  }

  async deleteCategory(id) {
    return Category.query().deleteById(id);
  }

  async getAllCategory() {
    return Category.query();
  }

  async getCategoryById(id) {
    return Category.query().findById(id).withGraphFetched('products');
  }
  
  async updateCategory(id, query) {
    return Category.query().patchAndFetchById(id, {
      name: query,
    });
  }
}

module.exports = CategoryRepository;
