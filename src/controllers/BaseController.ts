import { Response } from 'express';
import HttpStatusCode from '../utils/HttpStatusCode';

interface IResponse<T> {
  res: Response;
  status: HttpStatusCode;
  data?: T;
}

export class BaseController {
  ok<T>({ res, data, status }: IResponse<T>): void {
    if (data === undefined && status !== undefined) {
      res.status(status);
      res.send();
    } else {
      res.status(status);
      res.json({ data });
    }
  }
}
