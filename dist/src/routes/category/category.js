"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Category_1 = __importDefault(require("../../container/Category"));
const router = (0, express_1.Router)();
router.get('/', Category_1.default.getAllCategory);
router.get('/:id', Category_1.default.getCategoryById);
router.post('/', Category_1.default.createNewCategory);
router.put('/:id', Category_1.default.updateCategory);
router.delete('/:id', Category_1.default.deleteCategory);
exports.default = router;
//# sourceMappingURL=category.js.map