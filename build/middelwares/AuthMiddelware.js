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
exports.AuthMiddleware = void 0;
class AuthMiddleware {
    constructor(authService) {
        this.authService = authService;
    }
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const _req = req;
            const token = req.headers.authorization;
            const splitToken = token === null || token === void 0 ? void 0 : token.split(' ')[1];
            if (!splitToken) {
                res.status(401).send('Unauthorized token');
                return;
            }
            try {
                const user = yield this.authService.getUserByToken(splitToken);
                _req.user = user.dataValues.id;
                next();
            }
            catch (e) {
                res.status(401).send('Unauthorized token');
            }
        });
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=AuthMiddelware.js.map