import { AuthMiddleware } from '../../middelwares/AuthMiddelware';
import { AuthRepository } from '../../repository/AuthRepository';
import { AuthService } from '../../services/Auth/AuthService';
import { AuthController } from './AuthController';
import { AuthMapper } from './mappers/AuthMapper';

const mapper = new AuthMapper();
const repository = new AuthRepository();
const authService = new AuthService(repository);
const authMiddelware = new AuthMiddleware(authService);
const createFactoryAuth = new AuthController(mapper, authService);

export { createFactoryAuth, authMiddelware };
