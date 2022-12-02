import { Response } from 'express';
import HttpStatusCode from '../utils/HttpStatusCode';

interface IResponse<T> {
  res: Response;
  status: HttpStatusCode;
  data?: T;
  errors?: T;
}

export class BaseController {
  response<T>({ res, data, errors, status }: IResponse<T>): void {
    if (data === undefined && errors === undefined && status !== undefined) {
      res.status(status);
      res.send();
    } else {
      const value = data ?? errors;
      res.status(status);
      res.json({ value });
    }
  }
}
