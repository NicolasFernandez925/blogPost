"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMapper = void 0;
const injection_js_1 = require("injection-js");
let PostMapper = class PostMapper {
    toDto(data) {
        return {
            id: data.dataValues.id,
            title: data.dataValues.title,
            publicationDate: data.dataValues.publicationDate,
            contents: data.dataValues.contents,
            status: data.dataValues.status,
            user: {
                id: data.dataValues.user.id,
                email: data.dataValues.user.email,
                name: data.dataValues.user.name
            },
            category: {
                name: data.dataValues.category.name
            },
            comments: data.dataValues.comments.map((comment) => {
                return {
                    id: comment.id,
                    contents: comment.comment,
                    user: {
                        id: comment.user.id,
                        email: comment.user.email,
                        name: comment.user.name
                    }
                };
            }),
            labels: data.dataValues.labels.map((label) => {
                return {
                    id: label.id,
                    name: label.name
                };
            })
        };
    }
    collectionOfDto(data) {
        return data.map((item) => {
            return this.toDto(item);
        });
    }
};
PostMapper = __decorate([
    (0, injection_js_1.Injectable)()
], PostMapper);
exports.PostMapper = PostMapper;
//# sourceMappingURL=PostMapper.js.map