import { Model } from 'Sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { AuthRepository } from '../../repository/AuthRepository';
import { IAuthService } from './IAuthService';
import { IUser } from '../../controllers/User/interfaces/user.interface';
import { Inject, Injectable } from 'injection-js';
import { AuthRepositoryToken } from 'controllers/Auth/inyection/inyection.tokens';

export interface IJwtPayload {
  id: string | number | undefined;
}

export interface IPropsBody {
  email: string;
  password: string;
  name: string;
}

export interface IResponseRegister {
  userCreated: Model<IUser>;
  token: string;
}

export interface IUserWithoutName extends Omit<IUser, 'name'> {}

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(AuthRepositoryToken) private repository: AuthRepository) {
    this.repository = repository;
  }

  public async login({ email, password }: IUserWithoutName): Promise<string> {
    const user = await this.repository.getUserByEmail(email);

    if (!user) {
      throw new Error('User not found with email' + email);
    }

    const isCorrectPassword = await bcrypt.compare(password, user.dataValues.password);

    if (!isCorrectPassword) {
      throw new Error('Password is incorrect');
    }

    const payload: IJwtPayload = {
      id: user.dataValues.id
    };

    const token = this.signJwt(payload);

    return token;
  }

  public async register(user: IPropsBody): Promise<IResponseRegister> {
    const checkUserExist = await this.repository.getUserByEmail(user.email);

    if (checkUserExist) {
      throw new Error('User already exist with email' + user.email);
    }

    const userWithPasswordEncrypt = this.encryptPasswordToUser(user);
    const userCreated = await this.repository.register(userWithPasswordEncrypt);

    const payload: IJwtPayload = {
      id: userCreated.dataValues.id
    };

    const token = this.signJwt(payload);

    return { userCreated, token };
  }

  private encryptPasswordToUser(user: IUser, saltRound = 10): IUser {
    const encryptedPassword = bcrypt.hashSync(user.password, saltRound);
    user.password = encryptedPassword;
    return user;
  }

  private signJwt(payload: IJwtPayload, time = '1h', secretJwt = 'secret'): string {
    const token = jwt.sign(payload, secretJwt, {
      expiresIn: time
    });

    return token;
  }

  public async getUserByToken(token: string): Promise<any> {
    const user = jwt.verify(token, 'secret') as IJwtPayload;

    if (!user) {
      throw new Error('Invalid token');
    }

    return await this.repository.getUserByToken(user);
  }
}
