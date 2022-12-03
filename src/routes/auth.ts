import { NextFunction, Request, Response, Router } from 'express';
import { authController } from 'controllers/Auth/inyection';
import { ValidatorAuthMiddelware } from 'controllers/Auth/middelware/Validator.middelware';

const router = Router();

router.post('/register', ValidatorAuthMiddelware.register(), (req: Request, res: Response, next: NextFunction) => {
  authController.register(req, res, next);
});

router.post('/login', ValidatorAuthMiddelware.login(), (req: Request, res: Response, next: NextFunction) => {
  authController.login(req, res, next);
});

export { router };
