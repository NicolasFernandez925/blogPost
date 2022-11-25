"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const HttpStatusCode_1 = __importDefault(require("../utils/HttpStatusCode"));
class BaseController {
    ok(res, data) {
        if (data === undefined) {
            res.status(HttpStatusCode_1.default.OK);
        }
        else {
            res.status(HttpStatusCode_1.default.OK);
            res.json({ data });
        }
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map