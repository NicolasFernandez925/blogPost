"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const createFactoryAuth_1 = require("../controllers/Auth/createFactoryAuth");
const express_1 = require("express");
const createFactoryPost_1 = require("../controllers/Post/createFactoryPost");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res, next) => {
    createFactoryPost_1.createFactoryPost.getAll(req, res, next);
});
router.get('/:id', (req, res, next) => createFactoryAuth_1.authMiddelware.use(req, res, next), (req, res, next) => {
    createFactoryPost_1.createFactoryPost.findById(req, res, next);
});
router.post('/create', (req, res, next) => createFactoryAuth_1.authMiddelware.use(req, res, next), (req, res, next) => {
    createFactoryPost_1.createFactoryPost.create(req, res, next);
});
//# sourceMappingURL=posts.js.map