"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMapper = void 0;
class PostMapper {
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
                    contents: comment.contents,
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
}
exports.PostMapper = PostMapper;
//# sourceMappingURL=PostMapper.js.map