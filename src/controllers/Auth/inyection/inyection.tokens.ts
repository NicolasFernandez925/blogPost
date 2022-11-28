import { InjectionToken } from 'injection-js';
import { AuthRepository } from 'repository/AuthRepository';
import { AuthService } from 'services/Auth/AuthService';
import { AuthMapper } from '../mappers/AuthMapper';

export const IAuthServiceToken = new InjectionToken<AuthService>('IAuthService');
export const AuthRepositoryToken = new InjectionToken<AuthRepository>('AuthRepository');
export const AuthMapperToken = new InjectionToken<AuthMapper>('AuthMapper');
