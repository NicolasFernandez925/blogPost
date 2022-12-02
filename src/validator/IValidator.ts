import { NextFunction, Request, Response } from 'express';

export interface IValidator {
  validate: (req: Request, res: Response, next: NextFunction) => void;
}
