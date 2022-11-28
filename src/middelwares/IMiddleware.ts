import { NextFunction, Response } from 'express';
import { ICustomRequest } from './auth/AuthMiddelware';

export interface IMiddleware {
  use: (req: ICustomRequest, res: Response, next: NextFunction) => Promise<void>;
}
