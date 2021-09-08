"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Products_1 = __importDefault(require("../../container/Products"));
const router = (0, express_1.Router)();
router.get('/', Products_1.default.getAllProducts);
router.get('/:id', Products_1.default.getProductById);
router.post('/', Products_1.default.createNewProduct);
router.put('/:id', Products_1.default.updateProduct);
router.delete('/:id', Products_1.default.deleteProduct);
exports.default = router;
//# sourceMappingURL=products.js.map