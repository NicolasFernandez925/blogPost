"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.PostRepository = void 0;
const comments_model_1 = require("../db/models/comments.model");
const database_1 = require("../db/database");
const categories_model_1 = require("../db/models/categories.model");
const users_model_1 = require("../db/models/users.model");
const injection_js_1 = require("injection-js");
let PostRepository = class PostRepository {
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
            const newPost = yield this.models.Post.create(post, {
                include: ['labels']
            });
            const idPost = newPost.dataValues.id;
            const postCreated = yield this.models.Post.findByPk(idPost, {
                include: this.relationships
            });
            return postCreated;
        });
    }
    update(id, post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.models.Post.update(Object.assign({}, post), {
                where: {
                    id
                }
            });
            const postUpdated = yield this.models.Post.findByPk(id, {
                include: this.relationships
            });
            return postUpdated;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            yield this.models.Post.destroy({
                where: {
                    id
                }
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield this.models.Post.findByPk(id);
            return comment;
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
};
PostRepository = __decorate([
    (0, injection_js_1.Injectable)()
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=PostRepository.js.map