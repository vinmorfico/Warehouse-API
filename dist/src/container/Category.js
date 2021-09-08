"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const CategoryRepository_1 = __importDefault(require("../repositories/CategoryRepository"));
const CategoryService_1 = __importDefault(require("../services/CategoryService"));
const categoryRepo = new CategoryRepository_1.default();
const categoryService = new CategoryService_1.default(categoryRepo);
const categoryController = new CategoryController_1.default(categoryService);
exports.default = categoryController;
//# sourceMappingURL=Category.js.map