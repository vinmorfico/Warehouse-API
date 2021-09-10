import { Router } from 'express';
import userController from '../../container/Users';
import { Prop } from '../../enums/enum.property';
import validation from '../../middlewares/validation';
import { loginPOST, refreshPOST, registerPOST } from '../../schemes/schemaAuth';

const authRouter = Router();

authRouter.post(
  '/login',
  validation(loginPOST, Prop.body),
  userController.login
);

authRouter.post(
  '/refresh',
  validation(refreshPOST, Prop.body),
  userController.refreshToken
);

authRouter.post(
  '/register',
  validation(registerPOST, Prop.body),
  userController.registerNewUser
);

export default authRouter;
