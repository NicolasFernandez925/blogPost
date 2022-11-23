"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMapper = void 0;
const typedi_1 = require("typedi");
let PostMapper = class PostMapper {
    toDto(data) {
        return {
            id: data.dataValues.id,
            title: data.dataValues.title,
            publicationDate: data.dataValues.publicationDate,
            contents: data.dataValues.contents,
            status: data.dataValues.status,
            user: {
                email: data.dataValues.user.email,
                name: data.dataValues.user.name
            },
            category: {
                name: data.dataValues.category.name
            }
        };
    }
    arrayToDto(data) {
        return data.map((item) => {
            return this.toDto(item);
        });
    }
};
PostMapper = __decorate([
    (0, typedi_1.Service)()
], PostMapper);
exports.PostMapper = PostMapper;
//# sourceMappingURL=MapperImple.js.map