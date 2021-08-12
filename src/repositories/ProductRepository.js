const Products = require('../entities/Products');

class ProductRepository {
  createNewProduct(query) {
    const { name, description, price, amount_left, category_id, users_id } =
      query;
    return Products.query().insert({
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    });
  }

  deleteProduct(id) {
    return Products.query().deleteById(id);
  }

  getAllProducts() {
    return Products.query();
  }

  getProductById(id) {
    return Products.query()
      .findById(id)
      .withGraphFetched('category')
      .withGraphFetched('users');
  }

  updateProduct(id, query) {
    const { name, description, price, amount_left, category_id, users_id } =
      query;
    return Products.query().patchAndFetchById(id, {
      name,
      description,
      price,
      amount_left,
      category_id,
      users_id,
    });
  }
}

module.exports = ProductRepository;
