"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostController = void 0;
const PostService_1 = require("services/PostService");
const MapperImple_1 = require("./mappers/MapperImple");
const PostController_1 = require("./PostController");
const postService = new PostService_1.PostService();
const mapper = new MapperImple_1.PostMapper();
const createPostController = new PostController_1.PostController(postService, mapper);
exports.createPostController = createPostController;
//# sourceMappingURL=createPostController.js.map