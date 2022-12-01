import { commentController } from 'controllers/comments/inyection';
import { Router } from 'express';
import { authMiddelware } from 'middelwares/auth/auth.middelware';

const router = Router();

router.post(
  '/create',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    commentController.create(req, res, next);
  }
);

router.put(
  '/edit',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    commentController.update(req, res, next);
  }
);

router.delete(
  '/:id',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    commentController.delete(req, res, next);
  }
);

/* router.get(
  '/:id',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    commentController.findAllById(req, res, next);
  }
); */

export { router };
