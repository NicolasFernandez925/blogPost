import { Model } from 'Sequelize';
import { IUser } from 'controllers/User/interfaces/user.interface';
import { User } from '../db/models/users.model';

export class UserRepository {
  async getAll(): Promise<Array<Model<IUser>>> {
    const users = await User.findAll();
    return users;
  }

  async findById(id: string): Promise<Model<IUser> | null> {
    const user = await User.findByPk(id);
    return user;
  }
}
