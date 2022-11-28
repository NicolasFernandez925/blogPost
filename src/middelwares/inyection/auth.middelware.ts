import { AuthRepositoryToken, IAuthServiceToken } from 'controllers/Auth/inyection/inyection.tokens';
import { ReflectiveInjector } from 'injection-js';
import { AuthMiddleware } from 'middelwares/AuthMiddelware';
import { AuthRepository } from 'repository/AuthRepository';
import { AuthService } from 'services/Auth/AuthService';

const providers = [
  { provide: IAuthServiceToken, useClass: AuthService },
  { provide: AuthRepositoryToken, useClass: AuthRepository },
  AuthMiddleware
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const authMiddelware = injector.get(AuthMiddleware);

export { authMiddelware };
