/* import { IValidatorToken } from 'controllers/Post/inyection/inyection.tokens'; */
import { IUserDTO } from 'controllers/User/dtos/IUserDTO';
import { CustomError } from 'error/BaseError';
import { NextFunction, Request, Response } from 'express';
import { Inject } from 'injection-js';
import { IResponseUser } from 'services/Auth/AuthService';
import HttpStatusCode from 'utils/HttpStatusCode';
import { IValidatorToken } from 'validator/injection';
import { IValidator } from 'validator/IValidator';
import { IResponseValidator } from 'validator/Validator';
import { BaseController } from '../../controllers/BaseController';
import { IAuthService } from '../../services/Auth/IAuthService';
import { AuthMapperToken, IAuthServiceToken } from './inyection/inyection.tokens';

import { AuthMapper } from './mappers/AuthMapper';

interface IResponseUserDTO extends Omit<IResponseUser, 'user'> {
  user: IUserDTO;
}

export class AuthController extends BaseController {
  constructor(
    @Inject(AuthMapperToken) private mapper: AuthMapper,
    @Inject(IAuthServiceToken) private service: IAuthService,
    @Inject(IValidatorToken) private validator: IValidator
  ) {
    super();
    this.mapper = mapper;
    this.service = service;
    this.validator = validator;
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    const { hasError, errors }: IResponseValidator = this.validator.validate(req, res, next);

    try {
      if (hasError) {
        throw new CustomError('Bad request', HttpStatusCode.BAD_REQUEST, 'Bad request', errors.array());
      }

      const { user, token } = await this.service.login({ email, password });

      this.response<IResponseUserDTO>({
        res,
        status: HttpStatusCode.OK,
        data: { user: this.mapper.toDto(user), token }
      });
    } catch (e) {
      next(e);
    }
  }

  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password, name } = req.body;

    const { hasError, errors }: IResponseValidator = this.validator.validate(req, res, next);

    try {
      if (hasError) {
        throw new CustomError('Bad request', HttpStatusCode.BAD_REQUEST, 'Bad request', errors.array());
      }

      const { user, token } = await this.service.register({ email, password, name });
      res.status(200).json({ user: this.mapper.toDto(user), token });

      this.response<IResponseUserDTO>({
        res,
        status: HttpStatusCode.OK,
        data: { user: this.mapper.toDto(user), token }
      });
    } catch (e) {
      next(e);
    }
  }
}
