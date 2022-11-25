'use strict';
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
const Sequelize_1 = require("Sequelize");
const posts_model_1 = require("../models/posts.model");
const COLUMN = 'publicationDate';
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.changeColumn(posts_model_1.POSTS_TABLE, COLUMN, {
                defaultValue: Sequelize_1.DataTypes.NOW
            });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.changeColumn(posts_model_1.POSTS_TABLE, COLUMN, {
                defaultValue: Sequelize_1.DataTypes.NOW
            });
        });
    }
};
//# sourceMappingURL=20221123155022-create-comments.js.map