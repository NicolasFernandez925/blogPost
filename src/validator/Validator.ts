import { BaseController } from 'controllers/BaseController';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Injectable } from 'injection-js';
import HttpStatusCode from 'utils/HttpStatusCode';
import { IValidator } from './IValidator';

@Injectable()
export class Validator extends BaseController implements IValidator {
  validate(req: Request, res: Response, next?: NextFunction): void {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      this.response({ res, status: HttpStatusCode.BAD_REQUEST, data: errors.array() });
      return;
    }
  }
}
