"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMapper = void 0;
const injection_js_1 = require("injection-js");
let AuthMapper = class AuthMapper {
    toDto(data) {
        return {
            id: data.dataValues.id,
            email: data.dataValues.email,
            name: data.dataValues.name
        };
    }
};
AuthMapper = __decorate([
    (0, injection_js_1.Injectable)()
], AuthMapper);
exports.AuthMapper = AuthMapper;
//# sourceMappingURL=AuthMapper.js.map