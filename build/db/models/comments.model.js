"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSchema = exports.Comment = exports.COMMENTS_TABLE = void 0;
const Sequelize_1 = require("Sequelize");
const posts_model_1 = require("./posts.model");
const users_model_1 = require("./users.model");
const COMMENTS_TABLE = 'comments';
exports.COMMENTS_TABLE = COMMENTS_TABLE;
const CommentsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize_1.DataTypes.INTEGER
    },
    comment: {
        allowNull: false,
        type: Sequelize_1.DataTypes.TEXT
    },
    userId: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize_1.DataTypes.INTEGER,
        references: {
            model: users_model_1.USERS_TABLE,
            key: 'id'
        }
    },
    postId: {
        field: 'post_id',
        allowNull: false,
        type: Sequelize_1.DataTypes.INTEGER,
        references: {
            model: posts_model_1.POSTS_TABLE,
            key: 'id'
        }
    },
    createdAt: {
        field: 'created_at',
        allowNull: false,
        defaultValue: Sequelize_1.DataTypes.NOW,
        type: Sequelize_1.DataTypes.DATE
    },
    updatedAt: {
        field: 'updated_at',
        allowNull: false,
        defaultValue: Sequelize_1.DataTypes.NOW,
        type: Sequelize_1.DataTypes.DATE
    }
};
exports.CommentsSchema = CommentsSchema;
class Comment extends Sequelize_1.Model {
    static associate(models) {
        this.belongsTo(models.Post, {
            as: 'post'
        });
        this.belongsTo(models.User, {
            as: 'user'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: COMMENTS_TABLE,
            modelName: 'Comments',
            timestamps: true
        };
    }
}
exports.Comment = Comment;
//# sourceMappingURL=comments.model.js.map