import { Model } from 'Sequelize';
import { IUser } from 'controllers/User/interfaces/user.interface';
import { UserRepository } from 'repository/UserRepository';
import { IUserService } from './IUserService';

export class UserService implements IUserService {
  private repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async getAll(): Promise<Array<Model<IUser>>> {
    const users = await this.repository.getAll();
    return users;
  }

  async findById(id: string): Promise<Model<IUser> | null> {
    const user = await this.repository.findById(id);
    return user;
  }
}
