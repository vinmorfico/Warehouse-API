class ProductService {
  constructor(ProductRepository) {
    this.productRepo = ProductRepository;
  }

  async createNewProduct(query) {
    console.log(query)
    return await this.productRepo.createNewProduct(query);
  }

  async deleteProduct(id) {
    return await this.productRepo.deleteProduct(id);
  }
  async getAllProducts() {
    return await this.productRepo.getAllProducts();
  }
  async getProductById(id) {
    return await this.productRepo.getProductById(id);
  }
  async updateProduct(id, query) {
    return await this.productRepo.updateProduct(id, query);
  }
}

module.exports = ProductService;
