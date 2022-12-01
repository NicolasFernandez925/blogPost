"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const inyection_1 = require("controllers/Auth/inyection");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/register', (req, res, next) => {
    inyection_1.authController.register(req, res, next);
});
router.post('/login', (req, res, next) => {
    inyection_1.authController.login(req, res, next);
});
//# sourceMappingURL=auth.js.map