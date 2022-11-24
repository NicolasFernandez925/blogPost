import { IUser } from 'controllers/User/interfaces/user.interface';
import { Model } from 'Sequelize';

export interface IUserService {
  getAll: () => Promise<Array<Model<IUser>>>;
  findById: (id: string) => Promise<Model<IUser> | null>;
}
