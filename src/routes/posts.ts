import { createPostController } from 'controllers/Post/createPostController';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  createPostController.getAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  createPostController.findById(req, res, next);
});

export { router };
