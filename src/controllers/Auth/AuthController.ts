import { BaseController } from 'controllers/BaseController';
import { NextFunction, Request, Response } from 'express';
import { IAuthService } from 'services/Auth/IAuthService';
import { AuthMapper } from './mappers/AuthMapper';

export class AuthController extends BaseController {
  private mapper: AuthMapper;
  private service: IAuthService;

  constructor(mapper: AuthMapper, service: IAuthService) {
    super();
    this.mapper = mapper;
    this.service = service;
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body;

    try {
      const token = await this.service.login(email, password);
      res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  }
}
