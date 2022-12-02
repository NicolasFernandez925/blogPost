import { BaseController } from 'controllers/BaseController';
import { NextFunction, Request, Response } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';
import { Injectable } from 'injection-js';
import { IValidator } from './IValidator';

export interface IResponseValidator {
  hasError: boolean;
  errors: Result<ValidationError>;
}

@Injectable()
export class Validator extends BaseController implements IValidator {
  validate(req: Request, res: Response, next?: NextFunction): IResponseValidator {
    const errors = validationResult(req);
    let hasError = false;
    if (!errors.isEmpty()) {
      hasError = true;
    }

    return { hasError, errors };
  }
}
