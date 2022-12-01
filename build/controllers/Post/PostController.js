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
exports.PostController = void 0;
const injection_js_1 = require("injection-js");
const BaseController_1 = require("../BaseController");
const inyection_tokens_1 = require("./inyection/inyection.tokens");
const HttpStatusCode_1 = __importDefault(require("utils/HttpStatusCode"));
let PostController = class PostController extends BaseController_1.BaseController {
    constructor(postService, mapper) {
        super();
        this.postService = postService;
        this.mapper = mapper;
        this.mapper = mapper;
        this.postService = postService;
    }
    getAll(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield this.postService.getAll();
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: this.mapper.collectionOfDto(posts) });
            }
            catch (error) {
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const _req = req;
            try {
                const post = yield this.postService.create(req.body, _req.user);
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: this.mapper.toDto(post) });
            }
            catch (error) {
                next(error);
            }
        });
    }
    findById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const post = yield this.postService.findById(id);
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: this.mapper.toDto(post) });
            }
            catch (error) {
                next(error);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const post = yield this.postService.update(id, req.body);
                this.ok({ res, status: HttpStatusCode_1.default.OK, data: this.mapper.toDto(post) });
            }
            catch (error) {
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield this.postService.delete(id);
                this.ok({ res, status: HttpStatusCode_1.default.NO_CONTENT });
            }
            catch (error) {
                next(error);
            }
        });
    }
};
PostController = __decorate([
    __param(0, (0, injection_js_1.Inject)(inyection_tokens_1.IPostServiceToken)),
    __param(1, (0, injection_js_1.Inject)(inyection_tokens_1.PostMapperToken))
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map