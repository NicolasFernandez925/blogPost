import { Request, Response, NextFunction } from 'express';
import { IAuthService } from 'services/Auth/IAuthService';
import { IMiddleware } from './IMiddleware';
import { AuthRepository } from '../repository/AuthRepository';
import { AuthService } from 'services/Auth/AuthService';

export interface ICustomRequest extends Request {
  user: number;
}

export class AuthMiddleware implements IMiddleware {
  private authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
  }

  public async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const _req = req as ICustomRequest;

    const token = req.headers.authorization;

    const splitToken = token?.split(' ')[1];

    if (!splitToken) {
      res.status(401).send('Unauthorized one');
      return;
    }

    try {
      const rep = new AuthRepository();
      const ser = new AuthService(rep);
      const user = await ser.getUserByToken(splitToken);

      _req.user = user.dataValues.id;

      next();
    } catch (e) {
      res.status(401).send('Unauthorized two');
    }
  }
}
