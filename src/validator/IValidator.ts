import { NextFunction, Request, Response } from 'express';
import { IResponseValidator } from './Validator';

export interface IValidator {
  validate: (req: Request, res: Response, next: NextFunction) => IResponseValidator;
}
