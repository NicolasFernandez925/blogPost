"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddelware = void 0;
const inyection_tokens_1 = require("controllers/Auth/inyection/inyection.tokens");
const injection_js_1 = require("injection-js");
const AuthMiddelware_1 = require("middelwares/auth/AuthMiddelware");
const AuthRepository_1 = require("repository/AuthRepository");
const AuthService_1 = require("services/Auth/AuthService");
const providers = [
    { provide: inyection_tokens_1.IAuthServiceToken, useClass: AuthService_1.AuthService },
    { provide: inyection_tokens_1.AuthRepositoryToken, useClass: AuthRepository_1.AuthRepository },
    AuthMiddelware_1.AuthMiddleware
];
const injector = injection_js_1.ReflectiveInjector.resolveAndCreate(providers);
const authMiddelware = injector.get(AuthMiddelware_1.AuthMiddleware);
exports.authMiddelware = authMiddelware;
//# sourceMappingURL=auth.middelware.js.map