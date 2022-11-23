"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UsersSchema = exports.USERS_TABLE = void 0;
const Sequelize_1 = require("Sequelize");
const USERS_TABLE = 'users';
exports.USERS_TABLE = USERS_TABLE;
const UsersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize_1.DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: Sequelize_1.DataTypes.STRING(45),
        unique: true
    },
    password: {
        allowNull: false,
        type: Sequelize_1.DataTypes.STRING(45)
    },
    name: {
        allowNull: false,
        type: Sequelize_1.DataTypes.STRING(25)
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
exports.UsersSchema = UsersSchema;
class User extends Sequelize_1.Model {
    static associate(models) {
        this.hasMany(models.Post, {
            as: 'post',
            foreignKey: 'userId'
        });
        this.hasMany(models.Comment, {
            as: 'comment',
            foreignKey: 'userId'
        });
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE,
            modelName: 'User',
            timestamps: true
        };
    }
}
exports.User = User;
//# sourceMappingURL=users.model.js.map