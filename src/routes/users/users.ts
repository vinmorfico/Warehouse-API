import { Router } from 'express';
import userController from '../../container/Users';
import { Prop } from '../../enums/enum.property';
import validation from '../../middlewares/validation';
import { paramID } from '../../schemes/schemaParamsId';

const usersRouter = Router();

usersRouter.get('/', userController.getAllUsers);

usersRouter.get(
  '/:id',
  validation(paramID, Prop.params),
  userController.getUser
);

export default usersRouter;
