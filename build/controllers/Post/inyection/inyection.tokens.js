"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMapperToken = exports.PostRepositoryToken = exports.IPostServiceToken = void 0;
const injection_js_1 = require("injection-js");
exports.IPostServiceToken = new injection_js_1.InjectionToken('IPostService');
exports.PostRepositoryToken = new injection_js_1.InjectionToken('PostRepository');
exports.PostMapperToken = new injection_js_1.InjectionToken('PostMapper');
//# sourceMappingURL=inyection.tokens.js.map