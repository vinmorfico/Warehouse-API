"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemaParamsId_1 = require("../routes/schemaParamsId");
const schemaProducts_1 = require("../schemes/schemaProducts");
class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.createNewProduct = async (req, res, next) => {
            await schemaProducts_1.productsPOST.validateAsync(req.body);
            const product = await this.productService.createNewProduct(req.body);
            req.body.product = product;
            res.status(201).json(product);
            next();
        };
        this.deleteProduct = async (req, res, next) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            await this.productService.deleteProduct(req.params.id);
            res.status(200).json({ status: 'deleted' });
            next();
        };
        this.getAllProducts = async (_req, res) => {
            const product = await this.productService.getAllProducts();
            res.status(200).json(product);
        };
        this.getProductById = async (req, res) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            const product = await this.productService.getProductById(req.params.id);
            res.status(200).json(product);
        };
        this.updateProduct = async (req, res, next) => {
            await schemaParamsId_1.paramID.validateAsync(req.params);
            await schemaProducts_1.productsPUT.validateAsync(req.body);
            const product = await this.productService.updateProduct(req.params.id, req.body);
            res.status(200).json(product);
            next();
        };
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map