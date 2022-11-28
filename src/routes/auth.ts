import { Router } from 'express';
import { authController } from 'controllers/Auth/inyection';

const router = Router();

router.post('/register', (req, res, next) => {
  authController.register(req, res, next);
});

router.post('/login', (req, res, next) => {
  authController.login(req, res, next);
});

export { router };
