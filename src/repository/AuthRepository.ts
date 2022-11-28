import { Injectable } from 'injection-js';
import { Model } from 'Sequelize';
import { IUser } from '../controllers/User/interfaces/user.interface';
import { User } from '../db/models/users.model';
import { IJwtPayload, IPropsBody } from '../services/Auth/AuthService';

@Injectable()
export class AuthRepository {
  public async getUserByToken(user: IJwtPayload): Promise<Model<IUser> | null> {
    const responseUser = await User.findOne({
      where: {
        id: user.id
      }
    });

    return responseUser;
  }

  public async register(user: IPropsBody): Promise<Model<IUser>> {
    const responseUser = await User.create(user);

    return responseUser;
  }

  public async getUserByEmail(email: string): Promise<Model<IUser> | null> {
    const responseUser = await User.findOne({
      where: {
        email
      }
    });

    return responseUser;
  }
}
