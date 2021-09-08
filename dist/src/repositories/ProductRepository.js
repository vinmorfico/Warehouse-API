"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = require("../entities/Products");
class ProductRepository {
    createNewProduct(query) {
        const { name, description, price, amount_left, category_id, users_id } = query;
        return Products_1.Products.query().insert({
            name,
            description,
            price,
            amount_left,
            category_id,
            users_id,
        });
    }
    deleteProduct(id) {
        return Products_1.Products.query().deleteById(id);
    }
    getAllProducts() {
        return Products_1.Products.query();
    }
    getProductById(id) {
        return Products_1.Products.query()
            .findById(id)
            .withGraphFetched('category')
            .withGraphFetched('users');
    }
    updateProduct(id, query) {
        const { name, description, price, amount_left, category_id, users_id } = query;
        return Products_1.Products.query().patchAndFetchById(id, {
            name,
            description,
            price,
            amount_left,
            category_id,
            users_id,
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map