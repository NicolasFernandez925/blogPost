import { BaseController } from 'controllers/BaseController';
import { NextFunction, Response, Request } from 'express';
import { IUserService } from 'services/User/IUserService';
import { IUserDTO } from './dtos/IUserDTO';
import { UserMapper } from './Mapper/UserMapper';

export class UserController extends BaseController {
  private service: IUserService;
  private mapper: UserMapper;

  constructor(service: IUserService, mapper: UserMapper) {
    super();
    this.service = service;
    this.mapper = mapper;
  }

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.service.getAll();

      this.ok<IUserDTO[]>(res, this.mapper.collectionOfDto(users));
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.service.findById(id);

      if (user === null) {
        throw new Error('the user was not found ');
      }

      this.ok<IUserDTO>(res, this.mapper.toDto(user));
    } catch (error) {
      next(error);
    }
  }
}
