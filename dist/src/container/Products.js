"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
const ProductService_1 = __importDefault(require("../services/ProductService"));
const productRepo = new ProductRepository_1.default();
const productService = new ProductService_1.default(productRepo);
const productController = new ProductController_1.default(productService);
exports.default = productController;
//# sourceMappingURL=Products.js.map