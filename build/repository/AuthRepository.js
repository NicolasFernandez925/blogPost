"use strict";
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
const users_model_1 = require("../db/models/users.model");
class AuthRepository {
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
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=AuthRepository.js.map