import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/ProductService';
import { paramID } from '../routes/schemaParamsId';
import { productsPOST, productsPUT } from '../schemes/schemaProducts';

class ProductController {
  constructor(private readonly productService: ProductService) {}

  createNewProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    await productsPOST.validateAsync(req.body);
    const product = await this.productService.createNewProduct(req.body);
    req.body.product = product;
    res.status(201).json(product);
    next();
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    await paramID.validateAsync(req.params);
    await this.productService.deleteProduct(req.params.id);
    res.status(200).json({ status: 'deleted' });
    next();
  };

  getAllProducts = async (_req: Request, res: Response) => {
    const product = await this.productService.getAllProducts();
    res.status(200).json(product);
  };

  getProductById = async (req: Request, res: Response) => {
    await paramID.validateAsync(req.params);
    const product = await this.productService.getProductById(req.params.id);
    res.status(200).json(product);
  };

  updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    await paramID.validateAsync(req.params);
    await productsPUT.validateAsync(req.body);
    const product = await this.productService.updateProduct(
      req.params.id,
      req.body
    );
    res.status(200).json(product);
    next();
  };
}

export default ProductController;