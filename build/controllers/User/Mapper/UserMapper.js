"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    toDto(data) {
        return {
            id: data.dataValues.id,
            email: data.dataValues.email,
            name: data.dataValues.name
        };
    }
    collectionOfDto(data) {
        return data.map((item) => {
            return this.toDto(item);
        });
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=UserMapper.js.map