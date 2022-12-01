"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const injection_js_1 = require("injection-js");
const HttpStatusCode_1 = __importDefault(require("utils/HttpStatusCode"));
const BaseController_1 = require("../../controllers/BaseController");
const inyection_tokens_1 = require("./inyection/inyection.tokens");
let AuthController = class AuthController extends BaseController_1.BaseController {
    constructor(mapper, service) {
        super();
        this.mapper = mapper;
        this.service = service;
        this.mapper = mapper;
        this.service = service;
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const token = yield this.service.login({ email, password });
                res.status(200).json({ token });
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: token });
            }
            catch (e) {
                next(e);
            }
        });
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, name } = req.body;
            try {
                const user = yield this.service.register({ email, password, name });
                res.status(200).json({ user: this.mapper.toDto(user.userCreated), token: user.token });
                this.ok({
                    res,
                    status: HttpStatusCode_1.default.OK,
                    data: { user: this.mapper.toDto(user.userCreated), token: user.token }
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
};
AuthController = __decorate([
    __param(0, (0, injection_js_1.Inject)(inyection_tokens_1.AuthMapperToken)),
    __param(1, (0, injection_js_1.Inject)(inyection_tokens_1.IAuthServiceToken))
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map