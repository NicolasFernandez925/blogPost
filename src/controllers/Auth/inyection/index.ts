import { ReflectiveInjector } from 'injection-js';
import { AuthRepository } from 'repository/AuthRepository';
import { AuthService } from 'services/Auth/AuthService';
import { AuthController } from '../AuthController';
import { AuthMapper } from '../mappers/AuthMapper';
import { AuthMapperToken, AuthRepositoryToken, IAuthServiceToken } from './inyection.tokens';

const providersAuth = [
  { provide: IAuthServiceToken, useClass: AuthService },
  { provide: AuthRepositoryToken, useClass: AuthRepository },
  { provide: AuthMapperToken, useClass: AuthMapper },
  AuthController
];

const injector = ReflectiveInjector.resolveAndCreate(providersAuth);
const authController = injector.get(AuthController);

export { authController, providersAuth };
