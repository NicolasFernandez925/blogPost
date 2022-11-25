"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFactoryUser = void 0;
const UserRepository_1 = require("../../repository/UserRepository");
const UserService_1 = require("../../services/User/UserService");
const UserMapper_1 = require("./Mapper/UserMapper");
const UserController_1 = require("./UserController");
const mapper = new UserMapper_1.UserMapper();
const repository = new UserRepository_1.UserRepository();
const service = new UserService_1.UserService(repository);
const createFactoryUser = new UserController_1.UserController(service, mapper);
exports.createFactoryUser = createFactoryUser;
//# sourceMappingURL=createFactoryUser.js.map