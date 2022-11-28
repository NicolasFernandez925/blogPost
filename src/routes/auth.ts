import { Router } from 'express';

import { createFactoryAuth } from '../controllers/Auth/createFactoryAuth';

const router = Router();

router.post('/register', (req, res, next) => {
  createFactoryAuth.register(req, res, next);
});

router.post('/login', (req, res, next) => {
  createFactoryAuth.login(req, res, next);
});

export { router };
