const Products = require('../entities/Products');

class ProductRepository {
  async createNewProduct(query) {
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
  async deleteProduct(id) {
    return Products.query().deleteById(id);
  }
  async getAllProducts() {
    return Products.query();
  }
  async getProductById(id) {
    return Products.query()
      .findById(id)
      .withGraphFetched('category')
      .withGraphFetched('users');
  }
  async updateProduct(id, query) {
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
