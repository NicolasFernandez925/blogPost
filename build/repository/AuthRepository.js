"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const injection_js_1 = require("injection-js");
const users_model_1 = require("../db/models/users.model");
let AuthRepository = class AuthRepository {
    getUserByToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseUser = yield users_model_1.User.findOne({
                where: {
                    id: user.id
                }
            });
            return responseUser;
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseUser = yield users_model_1.User.create(user);
            return responseUser;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const responseUser = yield users_model_1.User.findOne({
                where: {
                    email
                }
            });
            return responseUser;
        });
    }
};
AuthRepository = __decorate([
    (0, injection_js_1.Injectable)()
], AuthRepository);
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=AuthRepository.js.map