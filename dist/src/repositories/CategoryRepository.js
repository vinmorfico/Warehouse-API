"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../entities/Category");
class CategoryRepository {
    createNewCategory(query) {
        return Category_1.Category.query().insert({
            name: query,
        });
    }
    deleteCategory(id) {
        return Category_1.Category.query().deleteById(id);
    }
    getAllCategory() {
        return Category_1.Category.query();
    }
    getCategoryById(id) {
        return Category_1.Category.query().findById(id).withGraphFetched('products');
    }
    updateCategory(id, query) {
        return Category_1.Category.query().patchAndFetchById(id, {
            name: query,
        });
    }
}
exports.default = CategoryRepository;
//# sourceMappingURL=CategoryRepository.js.map