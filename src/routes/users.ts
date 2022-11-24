import { createFactoryUser } from 'controllers/User/createFactoryUser';
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  createFactoryUser.getAll(req, res, next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  createFactoryUser.findById(req, res, next);
});

export { router };
