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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const injection_js_1 = require("injection-js");
const inyection_tokens_1 = require("controllers/Post/inyection/inyection.tokens");
let PostService = class PostService {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.repository.getAll();
            return posts;
        });
    }
    create(body, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const createPost = {
                title: body.title,
                contents: body.contents,
                categoryId: body.category_id,
                userId: idUser,
                status: body.status,
                comments: [],
                labels: body.labels
            };
            const post = yield this.repository.create(createPost);
            return post;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.repository.findById(id);
            if (post === null) {
                throw new Error('the post was not found ' + id);
            }
            return post;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.existedPost(Number(id))) {
                throw new Error('Post not found');
            }
            const updatePost = {
                title: body.title,
                contents: body.contents,
                categoryId: body.category_id,
                status: body.status,
                labels: body.labels
            };
            const post = yield this.repository.update(id, updatePost);
            return post;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.existedPost(Number(id))) {
                throw new Error('Post not found');
            }
            yield this.repository.delete(id);
        });
    }
    existedPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.repository.getById(id);
            return !post;
        });
    }
};
PostService = __decorate([
    (0, injection_js_1.Injectable)(),
    __param(0, (0, injection_js_1.Inject)(inyection_tokens_1.PostRepositoryToken))
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=PostService.js.map