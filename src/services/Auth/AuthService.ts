import { AuthRepository } from 'repository/AuthRepository';
import { IAuthService } from './IAuthService';

import jwt from 'jsonwebtoken';

export interface IJwtPayload {
  id: string;
}

export class AuthService implements IAuthService {
  private repository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.repository.getUserByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    /* const isPasswordCorrect = await user.comparePassword(password); */

    const isPasswordCorrect = password === user.password;

    if (!isPasswordCorrect) {
      throw new Error('Password is incorrect');
    }

    const payload: IJwtPayload = {
      id: user.id
    };

    const token = this.signJwt(payload);

    return token;
  }

  private signJwt(payload: IJwtPayload, time = '1h', secretJwt = 'secret'): string {
    const token = jwt.sign(payload, secretJwt, {
      expiresIn: time
    });

    return token;
  }

  public async getUserByToken(token: string): Promise<any> {
    console.log('verify', token);
    const user = jwt.verify(token, 'secret') as IJwtPayload;

    if (!user) {
      throw new Error('Invalid token');
    }

    return await this.repository.getUserByToken(user);
  }

  /*   public login = async (email: string, password: string): Promise<any> => {};

  public register = async (id: string): Promise<any> => {}; */
}
