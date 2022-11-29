import { commentController } from 'controllers/comments/inyection';
import { Router } from 'express';
import { authMiddelware } from 'middelwares/auth/auth.middelware';

const router = Router();

router.post(
  '/create',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    commentController.createComment(req, res, next);
  }
);

router.put(
  '/edit',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    commentController.updateComment(req, res, next);
  }
);

export { router };
