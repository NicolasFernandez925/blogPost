import { Response } from 'express';
import HttpStatusCode from '../utils/HttpStatusCode';

export class BaseController {
  ok<T>(res: Response, data?: T): void {
    if (data === undefined) {
      res.status(HttpStatusCode.OK);
    } else {
      res.status(HttpStatusCode.OK);
      res.json({ data });
    }
  }
}
