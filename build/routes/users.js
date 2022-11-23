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
exports.router = void 0;
const express_1 = require("express");
const database_1 = require("../db/database");
const router = (0, express_1.Router)();
exports.router = router;
function execute(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        /*  const user = sqlz.models.findByPk(1); */
        const models = database_1.SingletonDatabase.sequelize.models;
        try {
            const user = yield models.User.findAll();
            /* throw new Error('Error to get user'); */
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    });
}
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return yield execute(req, res, next); }));
//# sourceMappingURL=users.js.map