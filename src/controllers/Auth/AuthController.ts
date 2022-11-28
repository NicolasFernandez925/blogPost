import { NextFunction, Request, Response } from 'express';
import { Inject } from 'injection-js';

import { IResponseRegister } from 'services/Auth/AuthService';
import { BaseController } from '../../controllers/BaseController';
import { IAuthService } from '../../services/Auth/IAuthService';
import { AuthMapperToken, IAuthServiceToken } from './inyection/inyection.tokens';

import { AuthMapper } from './mappers/AuthMapper';

export class AuthController extends BaseController {
  constructor(
    @Inject(AuthMapperToken) private mapper: AuthMapper,
    @Inject(IAuthServiceToken) private service: IAuthService
  ) {
    super();
    this.mapper = mapper;
    this.service = service;
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    try {
      const token = await this.service.login({ email, password });
      res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }

  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password, name } = req.body;

    try {
      const user: IResponseRegister = await this.service.register({ email, password, name });
      res.status(200).json({ user: this.mapper.toDto(user.userCreated), token: user.token });
    } catch (e) {
      next(e);
    }
  }
}
