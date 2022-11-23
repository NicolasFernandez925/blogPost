"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const createPostController_1 = require("controllers/Post/createPostController");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res, next) => {
    createPostController_1.createPostController.getAll(req, res, next);
});
router.get('/:id', (req, res, next) => {
    createPostController_1.createPostController.findById(req, res, next);
});
//# sourceMappingURL=posts.js.map