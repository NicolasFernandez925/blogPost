"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFactoryPost = void 0;
const PostRepository_1 = require("../../repository/PostRepository");
const PostService_1 = require("../../services/Post/PostService");
const PostMapper_1 = require("./mappers/PostMapper");
const PostController_1 = require("./PostController");
const mapper = new PostMapper_1.PostMapper();
const repository = new PostRepository_1.PostRepository();
const postService = new PostService_1.PostService(repository);
const createFactoryPost = new PostController_1.PostController(postService, mapper);
exports.createFactoryPost = createFactoryPost;
//# sourceMappingURL=createFactoryPost.js.map