"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const createFactoryPost_1 = require("../controllers/Post/createFactoryPost");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res, next) => {
    createFactoryPost_1.createFactoryPost.getAll(req, res, next);
});
router.get('/:id', (req, res, next) => {
    createFactoryPost_1.createFactoryPost.findById(req, res, next);
});
router.post('/create', (req, res, next) => {
    createFactoryPost_1.createFactoryPost.create(req, res, next);
});
//# sourceMappingURL=posts.js.map