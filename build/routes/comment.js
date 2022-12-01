"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const inyection_1 = require("controllers/comments/inyection");
const express_1 = require("express");
const auth_middelware_1 = require("middelwares/auth/auth.middelware");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/create', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.commentController.create(req, res, next);
});
router.put('/edit', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.commentController.update(req, res, next);
});
router.delete('/:id', (req, res, next) => auth_middelware_1.authMiddelware.use(req, res, next), (req, res, next) => {
    inyection_1.commentController.delete(req, res, next);
});
//# sourceMappingURL=comment.js.map