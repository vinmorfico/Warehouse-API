import { Router } from 'express';
import productController from '../../container/Products';
import { Prop } from '../../enums/enum.property';
import validation from '../../middlewares/validation';
import { paramID } from '../../schemes/schemaParamsId';
import { productsPOST, productsPUT } from '../../schemes/schemaProducts';

const productsRouter = Router();

productsRouter.get('/', productController.getAllProducts);

productsRouter.get(
  '/:id',
  validation(paramID, Prop.params),
  productController.getProductById
);

productsRouter.post(
  '/',
  validation(productsPOST, Prop.body),
  productController.createNewProduct
);

productsRouter.put(
  '/:id',
  validation(paramID, Prop.params),
  validation(productsPUT, Prop.body),
  productController.updateProduct
);

productsRouter.delete(
  '/:id',
  validation(paramID, Prop.params),
  productController.deleteProduct
);

export default productsRouter;
