"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const createFactoryUser_1 = require("../controllers/User/createFactoryUser");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res, next) => {
    createFactoryUser_1.createFactoryUser.getAll(req, res, next);
});
router.get('/:id', (req, res, next) => {
    createFactoryUser_1.createFactoryUser.findById(req, res, next);
});
//# sourceMappingURL=users.js.map