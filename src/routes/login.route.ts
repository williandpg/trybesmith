import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const router = Router();

router.post('/', LoginController.getLogin);

export default router;