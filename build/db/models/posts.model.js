"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsSchema = exports.Post = exports.POSTS_TABLE = void 0;
const Sequelize_1 = require("Sequelize");
const categories_model_1 = require("./categories.model");
const users_model_1 = require("./users.model");
const POSTS_TABLE = 'posts';
exports.POSTS_TABLE = POSTS_TABLE;
const PostsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize_1.DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: Sequelize_1.DataTypes.STRING(150)
    },
    publicationDate: {
        field: 'publication_date',
        allowNull: false,
        defaultValue: Sequelize_1.DataTypes.NOW,
        type: Sequelize_1.DataTypes.DATE
    },
    contents: {
        allowNull: false,
        type: Sequelize_1.DataTypes.TEXT
    },
    status: {
        allowNull: false,
        type: Sequelize_1.DataTypes.STRING(10)
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: Sequelize_1.DataTypes.INTEGER,
        references: {
            model: categories_model_1.CATEGORIES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
exports.PostsSchema = PostsSchema;
class Post extends Sequelize_1.Model {
    static associate(models) {
        this.belongsTo(models.Category, {
            as: 'category'
        });
        this.belongsTo(models.User, {
            as: 'user'
        });
        this.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'postId'
        });
        this.belongsToMany(models.Label, {
            as: 'labels',
            through: models.LabelPost,
            foreignKey: 'postId',
            otherKey: 'labelId'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: POSTS_TABLE,
            modelName: 'Post',
            timestamps: true
        };
    }
}
exports.Post = Post;
//# sourceMappingURL=posts.model.js.map