"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesSchema = exports.Category = exports.CATEGORIES_TABLE = void 0;
const Sequelize_1 = require("Sequelize");
const CATEGORIES_TABLE = 'categories';
exports.CATEGORIES_TABLE = CATEGORIES_TABLE;
const CategoriesSchema = {
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
exports.CategoriesSchema = CategoriesSchema;
class Category extends Sequelize_1.Model {
    static associate(models) {
        this.hasMany(models.Post, {
            as: 'post',
            foreignKey: 'categoryId'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIES_TABLE,
            modelName: 'Category',
            timestamps: true
        };
    }
}
exports.Category = Category;
//# sourceMappingURL=categories.model.js.map