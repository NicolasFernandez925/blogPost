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
exports.PostService = void 0;
const database_1 = require("../../db/database");
class PostService {
    constructor(repository) {
        this.models = database_1.SingletonDatabase.sequelize.models;
        this.repository = repository;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.repository.getAll();
            return posts;
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const createPost = {
                title: body.title,
                contents: body.contents,
                categoryId: body.category_id,
                userId: body.user_id,
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
            return post;
        });
    }
}
exports.PostService = PostService;
//# sourceMappingURL=PostService.js.map