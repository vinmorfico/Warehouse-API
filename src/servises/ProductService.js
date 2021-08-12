class ProductService {
  constructor(ProductRepository) {
    this.productRepo = ProductRepository;
  }

  createNewProduct(query) {
    return this.productRepo.createNewProduct(query);
  }

  deleteProduct(id) {
    return this.productRepo.deleteProduct(id);
  }
  getAllProducts() {
    return this.productRepo.getAllProducts();
  }
  getProductById(id) {
    return this.productRepo.getProductById(id);
  }
  updateProduct(id, query) {
    return this.productRepo.updateProduct(id, query);
  }
}

module.exports = ProductService;
