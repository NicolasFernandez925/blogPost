import { Router } from 'express';
import { postController } from 'controllers/Post/inyection';
import { authMiddelware } from 'middelwares/inyection/auth.middelware';

const router = Router();

router.get('/', (req, res, next) => {
  postController.getAll(req, res, next);
});

router.get(
  '/:id',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    postController.findById(req, res, next);
  }
);

router.post(
  '/create',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    postController.create(req, res, next);
  }
);

export { router };
