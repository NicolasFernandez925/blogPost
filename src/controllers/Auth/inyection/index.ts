import { ReflectiveInjector } from 'injection-js';
import { AuthRepository } from 'repository/AuthRepository';
import { AuthService } from 'services/Auth/AuthService';
import { IValidatorToken } from 'validator/injection';
import { Validator } from 'validator/Validator';
import { AuthController } from '../AuthController';
import { AuthMapper } from '../mappers/AuthMapper';
import { AuthMapperToken, AuthRepositoryToken, IAuthServiceToken } from './inyection.tokens';

const providersAuth = [
  // example : when the token provided in the "provide" key is called, the class provided in the "class" key is injected
  { provide: IAuthServiceToken, useClass: AuthService },
  { provide: AuthRepositoryToken, useClass: AuthRepository },
  { provide: AuthMapperToken, useClass: AuthMapper },
  { provide: IValidatorToken, useClass: Validator },
  AuthController
];

const injector = ReflectiveInjector.resolveAndCreate(providersAuth);
const authController = injector.get(AuthController);

export { authController, providersAuth };
