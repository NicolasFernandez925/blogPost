import { AuthRepositoryToken, IAuthServiceToken } from 'controllers/Auth/inyection/inyection.tokens';
import { ReflectiveInjector } from 'injection-js';
import { AuthMiddleware } from 'middelwares/auth/AuthMiddelware';
import { AuthRepository } from 'repository/AuthRepository';
import { AuthService } from 'services/Auth/AuthService';

const providers = [
  // example : when the token provided in the "provide" key is called, the class provided in the "class" key is injected
  { provide: IAuthServiceToken, useClass: AuthService },
  { provide: AuthRepositoryToken, useClass: AuthRepository },
  AuthMiddleware
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const authMiddelware = injector.get(AuthMiddleware);

export { authMiddelware };
