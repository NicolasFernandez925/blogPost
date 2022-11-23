"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelsPostSchema = exports.LabelPost = exports.LABELS_POSTS_TABLE = void 0;
const Sequelize_1 = require("Sequelize");
const labels_model_1 = require("./labels.model");
const posts_model_1 = require("./posts.model");
const LABELS_POSTS_TABLE = 'labels_posts';
exports.LABELS_POSTS_TABLE = LABELS_POSTS_TABLE;
const LabelsPostSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize_1.DataTypes.INTEGER
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
    labelId: {
        field: 'label_id',
        allowNull: false,
        type: Sequelize_1.DataTypes.INTEGER,
        references: {
            model: labels_model_1.LABELS_TABLE,
            key: 'id'
        }
    }
};
exports.LabelsPostSchema = LabelsPostSchema;
class LabelPost extends Sequelize_1.Model {
    /* static associate(models: any): void {} */
    static config(sequelize) {
        return {
            sequelize,
            tableName: LABELS_POSTS_TABLE,
            modelName: 'LabelPost',
            timestamps: false
        };
    }
}
exports.LabelPost = LabelPost;
//# sourceMappingURL=labels-posts.model.js.map