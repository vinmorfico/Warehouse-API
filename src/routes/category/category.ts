import { Router } from 'express';
import categoryController from '../../container/Category';
import { Prop } from '../../enums/enum.property';
import validation from '../../middlewares/validation';
import { categoryPOST, categoryPUT } from '../../schemes/schemaCategory';
import { paramID } from '../../schemes/schemaParamsId';
const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategory);

categoryRouter.get(
  '/:id',
  validation(paramID, Prop.params),
  categoryController.getCategoryById
);

categoryRouter.post(
  '/',
  validation(categoryPOST, Prop.body),
  categoryController.createNewCategory
);

categoryRouter.put(
  '/:id',
  validation(paramID, Prop.params),
  validation(categoryPUT, Prop.body),
  categoryController.updateCategory
);

categoryRouter.delete(
  '/:id',
  validation(paramID, Prop.params),
  categoryController.deleteCategory
);

export default categoryRouter;
