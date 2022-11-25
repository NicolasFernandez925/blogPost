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
exports.UserController = void 0;
const BaseController_1 = require("../BaseController");
class UserController extends BaseController_1.BaseController {
    constructor(service, mapper) {
        super();
        this.service = service;
        this.mapper = mapper;
    }
    getAll(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.service.getAll();
                this.ok(res, this.mapper.collectionOfDto(users));
            }
            catch (error) {
                next(error);
            }
        });
    }
    findById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield this.service.findById(id);
                if (user === null) {
                    throw new Error('the user was not found ');
                }
                this.ok(res, this.mapper.toDto(user));
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map