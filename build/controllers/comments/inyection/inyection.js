"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMapperToken = exports.CommentRepositoryToken = exports.ICommentServiceToken = void 0;
const injection_js_1 = require("injection-js");
exports.ICommentServiceToken = new injection_js_1.InjectionToken('CommentService');
exports.CommentRepositoryToken = new injection_js_1.InjectionToken('CommentRepository');
exports.CommentMapperToken = new injection_js_1.InjectionToken('CommentMapper');
//# sourceMappingURL=inyection.js.map