"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemaCategory_1 = require("../schemes/schemaCategory");
const schemaParamsId_1 = require("../routes/schemaParamsId");
class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.createNewCategory = async (req, res) => {
            await schemaCategory_1.categoryPOST.validateAsync(req.body);
            const category = await this.categoryService.createNewCategory(req.body);
            res.status(201).json(category);
        };
        this.deleteCategory = async (req, res) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            await this.categoryService.deleteCategory(req.params.id);
            res.status(200).json({ status: 'deleted' });
        };
        this.getAllCategory = async (_req, res) => {
            const category = await this.categoryService.getAllCategory();
            res.status(200).json(category);
        };
        this.getCategoryById = async (req, res) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            const category = await this.categoryService.getCategoryById(req.params.id);
            res.status(200).json(category);
        };
        this.updateCategory = async (req, res) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            await schemaCategory_1.categoryPUT.validateAsync(req.body);
            const category = await this.categoryService.updateCategory(req.params.id, req.body);
            res.status(200).json(category);
        };
    }
}
exports.default = CategoryController;
//# sourceMappingURL=CategoryController.js.map