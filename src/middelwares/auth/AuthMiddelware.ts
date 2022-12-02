import { IAuthServiceToken } from 'controllers/Auth/inyection/inyection.tokens';
import { BaseController } from 'controllers/BaseController';
import { CustomError } from 'error/BaseError';
import { Request, Response, NextFunction } from 'express';
import { Inject } from 'injection-js';
import { IAuthService } from 'services/Auth/IAuthService';
import HttpStatusCode from 'utils/HttpStatusCode';
import { IMiddleware } from '../IMiddleware';

export interface ICustomRequest extends Request {
  user: number;
}
export class AuthMiddleware extends BaseController implements IMiddleware {
  constructor(@Inject(IAuthServiceToken) private authService: IAuthService) {
    super();
    this.authService = authService;
  }

  public async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const _req = req as ICustomRequest;
    const token = req.headers.authorization;
    const splitToken = token?.split(' ')[1];

    try {
      if (!splitToken) {
        throw new CustomError('Invalid token', HttpStatusCode.UNAUTHORIZED, 'Unauthorized');
      }

      const user = await this.authService.getUserByToken(splitToken);
      _req.user = user!.dataValues.id as number;
      next();
    } catch (error: any) {
      this.responseUnauthorized(res);
    }
  }
}
