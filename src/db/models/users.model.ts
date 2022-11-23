import { Model, DataTypes, Sequelize, InitOptions } from 'Sequelize';

const USERS_TABLE = 'users';

const UsersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(45),
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING(45)
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING(25)
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    defaultValue: DataTypes.NOW,
    type: DataTypes.DATE
  },
  updatedAt: {
    field: 'updated_at',
    allowNull: false,
    defaultValue: DataTypes.NOW,
    type: DataTypes.DATE
  }
};

class User extends Model {
  static associate(models: any): void {
    this.hasMany(models.Post, {
      as: 'post',
      foreignKey: 'userId'
    });

    this.hasMany(models.Comment, {
      as: 'comment',
      foreignKey: 'userId'
    });
  }

  static config(sequelize: Sequelize): InitOptions<User> {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'User',
      timestamps: true
    };
  }
}

export { USERS_TABLE, UsersSchema, User };
