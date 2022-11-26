import { Router } from 'express';

import { createFactoryAuth, authMiddelware } from '../controllers/Auth/createFactoryAuth';

const router = Router();

router.get('/', authMiddelware.use, (req, res, next) => {
  res.status(200).send('Todo ok');
});

router.post('/login', (req, res, next) => {
  createFactoryAuth.login(req, res, next);
});

export { router };
