"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.LabelSchema = exports.LABELS_TABLE = void 0;
const Sequelize_1 = require("Sequelize");
const LABELS_TABLE = 'labels';
exports.LABELS_TABLE = LABELS_TABLE;
const LabelSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize_1.DataTypes.STRING(45)
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
exports.LabelSchema = LabelSchema;
class Label extends Sequelize_1.Model {
    /* static associate(models: any): void {
      this.belongsToMany(models.Post, {
        as: 'posts',
        through: models.LabelPost,
        foreignKey: 'labelId',
        otherKey: 'postId'
      });
    } */
    static config(sequelize) {
        return {
            sequelize,
            tableName: LABELS_TABLE,
            modelName: 'Label',
            timestamps: true
        };
    }
}
exports.Label = Label;
//# sourceMappingURL=labels.model.js.map