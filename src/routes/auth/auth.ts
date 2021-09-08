import { Router } from 'express';
import userController from '../../container/Users';

const router = Router();

router.post('/login', userController.login);

router.post('/refresh', userController.refreshToken);

router.post('/register', userController.registerNewUser);

export default router;
