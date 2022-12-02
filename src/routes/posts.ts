import { NextFunction, Request, Response, Router } from 'express';
import { postController } from 'controllers/Post/inyection';
import { authMiddelware } from 'middelwares/auth/inyection/auth.middelware';
import { ValidatorPostMiddelware } from 'controllers/Post/middelware/Validator.middelware';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  postController.getAll(req, res, next);
});

router.delete(
  '/:id',
  ValidatorPostMiddelware.checkParam('id'),
  (req: Request, res: Response, next: NextFunction) => authMiddelware.use(req, res, next),
  (req: Request, res: Response, next: NextFunction) => {
    postController.delete(req, res, next);
  }
);

router.get(
  '/:id',
  ValidatorPostMiddelware.checkParam('id'),
  (req: Request, res: Response, next: NextFunction) => authMiddelware.use(req, res, next),
  (req: Request, res: Response, next: NextFunction) => {
    postController.findById(req, res, next);
  }
);

router.put(
  '/:id',
  ValidatorPostMiddelware.checkParam('id'),
  ValidatorPostMiddelware.post(),
  (req: Request, res: Response, next: NextFunction) => authMiddelware.use(req, res, next),
  (req: Request, res: Response, next: NextFunction) => {
    postController.update(req, res, next);
  }
);

router.post(
  '/create',
  ValidatorPostMiddelware.post(),
  (req: Request, res: Response, next: NextFunction) => authMiddelware.use(req, res, next),
  (req: Request, res: Response, next: NextFunction) => {
    postController.create(req, res, next);
  }
);

export { router };
