import { UserRepository } from '../../repository/UserRepository';
import { UserService } from '../../services/User/UserService';
import { UserMapper } from './Mapper/UserMapper';
import { UserController } from './UserController';

const mapper = new UserMapper();
const repository = new UserRepository();
const service = new UserService(repository);
const createFactoryUser = new UserController(service, mapper);

export { createFactoryUser };
