import { IUser } from '../interfaces/user.interface';

export interface IUserDTO extends Omit<IUser, 'password'> {}
