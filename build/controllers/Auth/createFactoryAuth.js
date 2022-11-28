"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddelware = exports.createFactoryAuth = void 0;
const AuthMiddelware_1 = require("../../middelwares/AuthMiddelware");
const AuthRepository_1 = require("../../repository/AuthRepository");
const AuthService_1 = require("../../services/Auth/AuthService");
const AuthController_1 = require("./AuthController");
const AuthMapper_1 = require("./mappers/AuthMapper");
const mapper = new AuthMapper_1.AuthMapper();
const repository = new AuthRepository_1.AuthRepository();
const authService = new AuthService_1.AuthService(repository);
const authMiddelware = new AuthMiddelware_1.AuthMiddleware(authService);
exports.authMiddelware = authMiddelware;
const createFactoryAuth = new AuthController_1.AuthController(mapper, authService);
exports.createFactoryAuth = createFactoryAuth;
//# sourceMappingURL=createFactoryAuth.js.map