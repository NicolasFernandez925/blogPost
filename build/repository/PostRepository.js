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
exports.PostRepository = void 0;
const comments_model_1 = require("db/models/comments.model");
const database_1 = require("db/database");
const categories_model_1 = require("db/models/categories.model");
const users_model_1 = require("db/models/users.model");
class PostRepository {
    constructor() {
        this.models = database_1.SingletonDatabase.sequelize.models;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.models.Post.findAll({
                include: this.relationships
            });
            return posts;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.models.Post.findOne({
                where: {
                    id
                },
                include: this.relationships
            });
            return post;
        });
    }
    create(post) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(post);
            const newPost = yield this.models.Post.create(post, {
                include: ['labels', 'comments']
            });
            return newPost;
        });
    }
    get relationships() {
        return [
            {
                model: users_model_1.User,
                as: 'user'
            },
            {
                model: categories_model_1.Category,
                as: 'category'
            },
            {
                model: comments_model_1.Comment,
                as: 'comments',
                include: [
                    {
                        model: users_model_1.User,
                        as: 'user'
                    }
                ]
            },
            'labels'
        ];
    }
}
exports.PostRepository = PostRepository;
//# sourceMappingURL=PostRepository.js.map