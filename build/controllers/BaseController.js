"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    ok({ res, data, status }) {
        if (data === undefined && status !== undefined) {
            res.status(status);
            res.send();
        }
        else {
            res.status(status);
            res.json({ data });
        }
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map