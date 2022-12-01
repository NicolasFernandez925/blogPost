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
exports.CommentService = void 0;
const inyection_1 = require("controllers/comments/inyection/inyection");
const injection_js_1 = require("injection-js");
let CommentService = class CommentService {
    constructor(repository) {
        this.repository = repository;
        this.repository = repository;
    }
    create({ post_id, comment, user_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newComment = {
                postId: post_id,
                userId: user_id,
                comment
            };
            const result = yield this.repository.create(newComment);
            return result;
        });
    }
    update({ id, comment }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.existedComment(id)) {
                throw new Error('Comment not found');
            }
            const result = yield this.repository.update({ id, comment });
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log();
            if (yield this.existedComment(id)) {
                throw new Error('Comment not found');
            }
            yield this.repository.delete(id);
        });
    }
    existedComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield this.repository.getById(id);
            return !comment;
        });
    }
};
CommentService = __decorate([
    (0, injection_js_1.Injectable)(),
    __param(0, (0, injection_js_1.Inject)(inyection_1.CommentRepositoryToken))
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=CommentService.js.map