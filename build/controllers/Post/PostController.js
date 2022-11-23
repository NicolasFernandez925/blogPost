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
exports.PostController = void 0;
const BaseController_1 = require("../BaseController");
class PostController extends BaseController_1.BaseController {
    constructor(postService, mapper) {
        super();
        this.mapper = mapper;
        this.postService = postService;
    }
    getAll(_req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /* console.log(posts[0].dataValues); */
                const posts = yield this.postService.getAll();
                this.ok(res, this.mapper.arrayToDto(posts));
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        });
    }
    findById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const post = yield this.postService.findById(id);
                if (post === null) {
                    throw new Error('the post was not found ' + id);
                }
                this.ok(res, this.mapper.toDto(post));
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map