import { Model } from 'Sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { AuthRepository } from '../../repository/AuthRepository';
import { IAuthService } from './IAuthService';
import { IUser } from '../../controllers/User/interfaces/user.interface';
import { Inject, Injectable } from 'injection-js';
import { AuthRepositoryToken } from 'controllers/Auth/inyection/inyection.tokens';
import { CustomError } from 'error/BaseError';
import HttpStatusCode from 'utils/HttpStatusCode';

export interface IJwtPayload {
  id: string | number | undefined;
}

export interface IPropsBody {
  email: string;
  password: string;
  name: string;
}

export interface IResponseUser {
  user: Model<IUser>;
  token: string;
}

export interface IUserWithoutName extends Omit<IUser, 'name'> {}

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(AuthRepositoryToken) private repository: AuthRepository) {
    this.repository = repository;
  }

  public async login({ email, password }: IUserWithoutName): Promise<IResponseUser> {
    const user = await this.repository.getUserByEmail(email);

    if (!user) {
      throw new CustomError('User not found', HttpStatusCode.NOT_FOUND, 'Not found');
    }

    const isCorrectPassword = await bcrypt.compare(password, user.dataValues.password);

    if (!isCorrectPassword) {
      throw new CustomError('Invalid token', HttpStatusCode.FORBIDDEN, 'Forbidden');
    }

    const payload: IJwtPayload = {
      id: user.dataValues.id
    };

    const token = this.signJwt(payload);

    return { token, user };
  }

  public async register(userRegister: IPropsBody): Promise<IResponseUser> {
    const checkUserExist = await this.repository.getUserByEmail(userRegister.email);

    if (checkUserExist) {
      throw new CustomError('User already exist with email', HttpStatusCode.CONFLICT, 'Aaready exist ');
    }

    const userWithPasswordEncrypt = this.encryptPasswordToUser(userRegister);
    const user = await this.repository.register(userWithPasswordEncrypt);

    const payload: IJwtPayload = {
      id: user.dataValues.id
    };

    const token = this.signJwt(payload);

    return { user, token };
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

  public async getUserByToken(token: string): Promise<Model<IUser> | null> {
    const user = jwt.verify(token, 'secret') as IJwtPayload;

    if (!user) {
      throw new CustomError('Invalid token', HttpStatusCode.UNAUTHORIZED, 'Unauthorized');
    }

    return await this.repository.getUserByToken(user);
  }
}
