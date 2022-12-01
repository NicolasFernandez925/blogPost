"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentController = void 0;
const injection_js_1 = require("injection-js");
const CommentRepository_1 = require("repository/CommentRepository");
const CommentService_1 = require("../../../services/Comment/CommentService");
const CommentMapper_1 = require("../mappers/CommentMapper");
const CommentController_1 = require("../CommentController");
const inyection_1 = require("./inyection");
const providers = [
    { provide: inyection_1.ICommentServiceToken, useClass: CommentService_1.CommentService },
    { provide: inyection_1.CommentRepositoryToken, useClass: CommentRepository_1.CommentRepository },
    { provide: inyection_1.CommentMapperToken, useClass: CommentMapper_1.CommentMapper },
    CommentController_1.CommentController
];
const injector = injection_js_1.ReflectiveInjector.resolveAndCreate(providers);
const commentController = injector.get(CommentController_1.CommentController);
exports.commentController = commentController;
//# sourceMappingURL=index.js.map