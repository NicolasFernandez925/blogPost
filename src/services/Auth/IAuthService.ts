import { IPropsBody, IResponseUser, IUserWithoutName } from './AuthService';
import { Model } from 'Sequelize';
import { IUser } from 'controllers/User/interfaces/user.interface';

interface IAuthService {
  getUserByToken: (token: string) => Promise<Model<IUser> | null>;
  login: (user: IUserWithoutName) => Promise<IResponseUser>;
  register: (user: IPropsBody) => Promise<IResponseUser>;
}

export { IAuthService };
