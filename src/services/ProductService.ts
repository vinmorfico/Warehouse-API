import IProduct from '../interfaces/Product.interface';
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  createNewProduct(query: IProduct) {
    return this.productRepo.createNewProduct(query);
  }

  deleteProduct(id: string) {
    return this.productRepo.deleteProduct(id);
  }
  getAllProducts() {
    return this.productRepo.getAllProducts();
  }
  getProductById(id: string) {
    return this.productRepo.getProductById(id);
  }
  updateProduct(id: string, query: IProduct) {
    return this.productRepo.updateProduct(id, query);
  }
}

export default ProductService;