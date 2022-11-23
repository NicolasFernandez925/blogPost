"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const database_1 = require("db/database");
const categories_model_1 = require("db/models/categories.model");
const users_model_1 = require("db/models/users.model");
const typedi_1 = require("typedi");
let PostService = class PostService {
    constructor() {
        this.models = database_1.SingletonDatabase.sequelize.models;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.models.Post.findAll({
                include: [
                    {
                        model: users_model_1.User,
                        as: 'user'
                    },
                    {
                        model: categories_model_1.Category,
                        as: 'category'
                    }
                ]
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
                include: [
                    {
                        model: users_model_1.User,
                        as: 'user'
                    },
                    {
                        model: categories_model_1.Category,
                        as: 'category'
                    }
                ]
            });
            return post;
        });
    }
};
PostService = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=PostService.js.map