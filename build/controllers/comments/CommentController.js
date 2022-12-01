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
exports.CommentController = void 0;
const injection_js_1 = require("injection-js");
const BaseController_1 = require("../../controllers/BaseController");
const inyection_1 = require("./inyection/inyection");
const HttpStatusCode_1 = __importDefault(require("../../utils/HttpStatusCode"));
let CommentController = class CommentController extends BaseController_1.BaseController {
    constructor(mapper, service) {
        super();
        this.mapper = mapper;
        this.service = service;
        this.mapper = mapper;
        this.service = service;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { post_id, comment } = req.body;
            const _req = req;
            const user_id = _req.user;
            try {
                const commentCreated = yield this.service.create({ post_id, comment, user_id });
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: this.mapper.toDto(commentCreated) });
            }
            catch (e) {
                next(e);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { comment, id } = req.body;
            try {
                const commentUpdated = yield this.service.update({ id, comment });
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: this.mapper.toDto(commentUpdated) });
            }
            catch (e) {
                next(e);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield this.service.delete(Number(id));
                this.ok({ res, status: HttpStatusCode_1.default.NO_CONTENT });
            }
            catch (e) {
                next(e);
            }
        });
    }
};
CommentController = __decorate([
    __param(0, (0, injection_js_1.Inject)(inyection_1.CommentMapperToken)),
    __param(1, (0, injection_js_1.Inject)(inyection_1.ICommentServiceToken))
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=CommentController.js.map