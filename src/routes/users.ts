import { Router, Request, Response, NextFunction } from 'express';
import { SingletonDatabase } from '../db/database';

const router = Router();

async function execute(req: Request, res: Response, next: NextFunction): Promise<void> {
  /*  const user = sqlz.models.findByPk(1); */
  const models = SingletonDatabase.sequelize.models;

  try {
    const user = await models.User.findAll();
    /* throw new Error('Error to get user'); */
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

router.get('/', async (req: Request, res: Response, next: NextFunction) => await execute(req, res, next));

export { router };
