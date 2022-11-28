import { IAuthServiceToken } from 'controllers/Auth/inyection/inyection.tokens';
import { Request, Response, NextFunction } from 'express';
import { Inject } from 'injection-js';

import { IAuthService } from 'services/Auth/IAuthService';
import { IMiddleware } from './IMiddleware';

export interface ICustomRequest extends Request {
  user: number;
}

export class AuthMiddleware implements IMiddleware {
  constructor(@Inject(IAuthServiceToken) private authService: IAuthService) {
    this.authService = authService;
  }

  public async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const _req = req as ICustomRequest;

    const token = req.headers.authorization;

    const splitToken = token?.split(' ')[1];

    if (!splitToken) {
      res.status(401).send('Unauthorized token');
      return;
    }

    try {
      const user = await this.authService.getUserByToken(splitToken);
      _req.user = user.dataValues.id;
      next();
    } catch (e) {
      res.status(401).send('Unauthorized token');
    }
  }
}
