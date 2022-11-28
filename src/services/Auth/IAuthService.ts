import { IPropsBody, IUserWithoutName } from './AuthService';

interface IAuthService {
  getUserByToken: (token: string) => Promise<any>;
  login: (user: IUserWithoutName) => Promise<string>;
  register: (user: IPropsBody) => Promise<any>;
}

export { IAuthService };
