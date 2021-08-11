const  Products  = require('../entities/Products');

class ProductService {
  constructor(ProductRepository) {
    this.productRepo = ProductRepository;
  }

  async createNewProduct({ Product }) { // {Product} its instance of the class Products
    return await this.productRepo.createNewProduct({ Product });
  }

  async deleteProduct({ Product }) {
    return await this.productRepo.deleteProduct({ Product });
  }
  async getAllProducts() {
    return await this.productRepo.getAllProducts();
  }
  async getProductById({ Product }) {
    return await this.productRepo.getProductById({ Product });
  }
  async updateProduct({ Product }) {
    return await this.productRepo.updateProduct({ Product });
  }
}

module.exports = ProductService;
