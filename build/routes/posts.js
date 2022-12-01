"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const inyection_1 = require("controllers/Post/inyection");
const auth_middelware_1 = require("middelwares/auth/auth.middelware");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res, next) => {
    inyection_1.postController.getAll(req, res, next);
});
router.delete('/:id', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.postController.delete(req, res, next);
});
router.get('/:id', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.postController.findById(req, res, next);
});
router.put('/:id', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.postController.update(req, res, next);
});
router.post('/create', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.postController.create(req, res, next);
});
//# sourceMappingURL=posts.js.map