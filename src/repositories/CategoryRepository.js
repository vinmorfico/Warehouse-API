const Category = require('../entities/Category');

class CategoryRepository {
  createNewCategory(query) {
    return Category.query().insert({
      name: query,
    });
  }

  deleteCategory(id) {
    return Category.query().deleteById(id);
  }

  getAllCategory() {
    return Category.query();
  }

  getCategoryById(id) {
    return Category.query().findById(id).withGraphFetched('products');
  }

  updateCategory(id, query) {
    return Category.query().patchAndFetchById(id, {
      name: query,
    });
  }
}

module.exports = CategoryRepository;
