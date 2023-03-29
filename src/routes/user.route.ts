import { Router } from 'express';
import UserController from '../controllers/User.controller';

const router = Router();
const userController = new UserController();

router.post('/login', (req, res) => userController.login(req, res));
router.get('/user', (req, res) => userController.getAll(req, res));

export default router;
