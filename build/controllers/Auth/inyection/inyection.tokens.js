"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMapperToken = exports.AuthRepositoryToken = exports.IAuthServiceToken = void 0;
const injection_js_1 = require("injection-js");
exports.IAuthServiceToken = new injection_js_1.InjectionToken('IAuthService');
exports.AuthRepositoryToken = new injection_js_1.InjectionToken('AuthRepository');
exports.AuthMapperToken = new injection_js_1.InjectionToken('AuthMapper');
//# sourceMappingURL=inyection.tokens.js.map