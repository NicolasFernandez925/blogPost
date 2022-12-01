"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providersAuth = exports.authController = void 0;
const injection_js_1 = require("injection-js");
const AuthRepository_1 = require("repository/AuthRepository");
const AuthService_1 = require("services/Auth/AuthService");
const AuthController_1 = require("../AuthController");
const AuthMapper_1 = require("../mappers/AuthMapper");
const inyection_tokens_1 = require("./inyection.tokens");
const providersAuth = [
    { provide: inyection_tokens_1.IAuthServiceToken, useClass: AuthService_1.AuthService },
    { provide: inyection_tokens_1.AuthRepositoryToken, useClass: AuthRepository_1.AuthRepository },
    { provide: inyection_tokens_1.AuthMapperToken, useClass: AuthMapper_1.AuthMapper },
    AuthController_1.AuthController
];
exports.providersAuth = providersAuth;
const injector = injection_js_1.ReflectiveInjector.resolveAndCreate(providersAuth);
const authController = injector.get(AuthController_1.AuthController);
exports.authController = authController;
//# sourceMappingURL=index.js.map