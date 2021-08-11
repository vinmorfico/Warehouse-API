const { Products } = require('../entities/Products');

class ProductRepository {
  async createNewProduct(product) {
    return Products.query().insert(product);
  }
  async deleteProduct(id) {
    return Products.query().deleteById(id);
  }
  async getAllProducts() {
    return Products.query();
  }
  async getProductById() {
    return Products.query(id)
    .findById(id)
    .withGraphFetched('category')
    .withGraphFetched('users');
  }
  async updateProduct(id, product) {
    return Products.query().patchAndFetchById(id, product);
  }
}

module.exports = ProductRepository;