import { Router } from 'express';
import userController from '../../container/Users';

const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUser);

export default router;
