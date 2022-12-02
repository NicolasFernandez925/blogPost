import { ValidationError } from 'express-validator';
import HttpStatusCode from 'utils/HttpStatusCode';

export class CustomError extends Error {
  public statusCode: HttpStatusCode;
  public errors: ValidationError[];

  constructor(
    message: string,
    statusCode: HttpStatusCode,
    description = 'Internal Server Error',
    errors?: ValidationError[]
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors ?? [];

    Error.captureStackTrace(this);
  }
}
