"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryService {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    createNewCategory(query) {
        return this.categoryRepo.createNewCategory(query);
    }
    deleteCategory(id) {
        return this.categoryRepo.deleteCategory(id);
    }
    getAllCategory() {
        return this.categoryRepo.getAllCategory();
    }
    getCategoryById(id) {
        return this.categoryRepo.getCategoryById(id);
    }
    updateCategory(id, query) {
        return this.categoryRepo.updateCategory(id, query);
    }
}
exports.default = CategoryService;
//# sourceMappingURL=CategoryService.js.map