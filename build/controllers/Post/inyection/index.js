"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const injection_js_1 = require("injection-js");
const PostRepository_1 = require("repository/PostRepository");
const PostService_1 = require("services/Post/PostService");
const PostMapper_1 = require("../mappers/PostMapper");
const PostController_1 = require("../PostController");
const inyection_tokens_1 = require("./inyection.tokens");
const providers = [
    { provide: inyection_tokens_1.IPostServiceToken, useClass: PostService_1.PostService },
    { provide: inyection_tokens_1.PostRepositoryToken, useClass: PostRepository_1.PostRepository },
    { provide: inyection_tokens_1.PostMapperToken, useClass: PostMapper_1.PostMapper },
    PostController_1.PostController
];
const injector = injection_js_1.ReflectiveInjector.resolveAndCreate(providers);
const postController = injector.get(PostController_1.PostController);
exports.postController = postController;
//# sourceMappingURL=index.js.map