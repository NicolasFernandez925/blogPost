import { Router } from 'express';
import { createFactoryPost } from '../controllers/Post/createFactoryPost';

const router = Router();

router.get('/', (req, res, next) => {
  createFactoryPost.getAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  createFactoryPost.findById(req, res, next);
});

router.post('/create', (req, res, next) => {
  createFactoryPost.create(req, res, next);
});

export { router };
