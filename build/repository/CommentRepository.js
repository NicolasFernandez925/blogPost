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
exports.CommentRepository = void 0;
const database_1 = require("db/database");
const categories_model_1 = require("db/models/categories.model");
const comments_model_1 = require("db/models/comments.model");
const posts_model_1 = require("db/models/posts.model");
const users_model_1 = require("db/models/users.model");
const injection_js_1 = require("injection-js");
let CommentRepository = class CommentRepository {
    constructor() {
        this.models = database_1.SingletonDatabase.sequelize.models;
    }
    create(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const newComment = yield this.models.Comment.create(comment);
            const idComment = newComment.dataValues.id;
            const commentCreated = yield this.models.Comment.findByPk(idComment, {
                include: this.relationships
            });
            return commentCreated;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield this.models.Comment.findByPk(id);
            return comment;
        });
    }
    update({ id, comment }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.models.Comment.update({
                comment
            }, {
                where: {
                    id
                }
            });
            const commentUpdated = yield this.models.Comment.findByPk(id, {
                include: this.relationships
            });
            return commentUpdated;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.models.Comment.destroy({
                where: {
                    id
                }
            });
        });
    }
    /*   public async findAllById(commentId: number): Promise<Model<IComment>[]> {
      const comments = await this.models.Comment.findAll({
        where: {
          commentId
        },
        include: this.relationships
      });
  
      return comments;
    } */
    get relationships() {
        return [
            {
                model: users_model_1.User,
                as: 'user'
            },
            {
                model: posts_model_1.Post,
                as: 'post',
                include: [
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
                    {
                        model: categories_model_1.Category,
                        as: 'category'
                    },
                    {
                        model: users_model_1.User,
                        as: 'user'
                    },
                    'labels'
                ]
            }
        ];
    }
};
CommentRepository = __decorate([
    (0, injection_js_1.Injectable)()
], CommentRepository);
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=CommentRepository.js.map