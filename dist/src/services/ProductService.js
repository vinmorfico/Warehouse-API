"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
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
exports.default = ProductService;
//# sourceMappingURL=ProductService.js.map