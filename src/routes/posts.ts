import { Router } from 'express';
import { postController } from 'controllers/Post/inyection';
import { authMiddelware } from 'middelwares/auth/auth.middelware';

const router = Router();

router.get('/', (req, res, next) => {
  postController.getAll(req, res, next);
});

router.delete(
  '/:id',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    postController.delete(req, res, next);
  }
);

router.get(
  '/:id',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    postController.findById(req, res, next);
  }
);

router.put(
  '/:id',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    postController.update(req, res, next);
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
