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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor(repository) {
        this.repository = repository;
    }
    login({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.getUserByEmail(email);
            if (!user) {
                throw new Error('User not found with email' + email);
            }
            const isCorrectPassword = yield bcrypt_1.default.compare(password, user.dataValues.password);
            if (!isCorrectPassword) {
                throw new Error('Password is incorrect');
            }
            const payload = {
                id: user.dataValues.id
            };
            const token = this.signJwt(payload);
            return token;
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkUserExist = yield this.repository.getUserByEmail(user.email);
            if (checkUserExist) {
                throw new Error('User already exist with email' + user.email);
            }
            const userWithPasswordEncrypt = this.encryptPasswordToUser(user);
            const userCreated = yield this.repository.register(userWithPasswordEncrypt);
            return userCreated;
        });
    }
    encryptPasswordToUser(user, saltRound = 10) {
        const encryptedPassword = bcrypt_1.default.hashSync(user.password, saltRound);
        user.password = encryptedPassword;
        return user;
    }
    signJwt(payload, time = '1h', secretJwt = 'secret') {
        const token = jsonwebtoken_1.default.sign(payload, secretJwt, {
            expiresIn: time
        });
        return token;
    }
    getUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = jsonwebtoken_1.default.verify(token, 'secret');
            if (!user) {
                throw new Error('Invalid token');
            }
            return yield this.repository.getUserByToken(user);
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map