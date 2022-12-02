import { Response } from 'express';
import { ValidationError } from 'express-validator';
import HttpStatusCode from '../utils/HttpStatusCode';

interface IResponse<T> {
  res: Response;
  status: HttpStatusCode;
  data?: T;
  errors?: T;
}

export class BaseController {
  protected response<T>({ res, data, errors, status }: IResponse<T>): void {
    if (data === undefined && errors === undefined) {
      res.status(status);
      res.send();
    } else {
      const value = data ?? errors;
      const key = data ? 'data' : 'errors';
      res.status(status).json({ [key]: value });
    }
  }

  protected responseBadRequest(res: Response, errors: ValidationError[]): void {
    this.response({ res, status: HttpStatusCode.BAD_REQUEST, errors });
  }

  protected responseUnauthorized(res: Response): void {
    this.response({ res, status: HttpStatusCode.UNAUTHORIZED, data: 'Unauthorized' });
  }
}
