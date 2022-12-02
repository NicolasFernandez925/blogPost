/* import { Error } from 'Sequelize'; */
import { CustomError } from 'error/BaseError';
import { NextFunction, Request, Response } from 'express';

export class ErrorMiddelware {
  public static use = (err: any, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof CustomError) {
      res.status(err.statusCode).json({
        status_code: err.statusCode,
        message: err.message,
        errors: err?.errors ?? []
      });
    }
  };
}
