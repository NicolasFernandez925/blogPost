"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createFactoryAuth_1 = require("../controllers/Auth/createFactoryAuth");
const router = (0, express_1.Router)();
exports.router = router;
/* router.get(
  '/',
  (req, res, next) => authMiddelware.use(req, res, next),
  (req, res, next) => {
    res.status(200).send('Access to protected route');
  }
); */
router.post('/register', (req, res, next) => {
    createFactoryAuth_1.createFactoryAuth.register(req, res, next);
});
router.post('/login', (req, res, next) => {
    createFactoryAuth_1.createFactoryAuth.login(req, res, next);
});
//# sourceMappingURL=auth.js.map