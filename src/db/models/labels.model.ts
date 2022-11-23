import { Model, DataTypes, Sequelize, InitOptions } from 'Sequelize';

const LABELS_TABLE = 'labels';

const LabelSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(45)
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

class Label extends Model {
  static associate(models: any): void {
    this.belongsToMany(models.Post, {
      as: 'posts',
      through: models.LabelPost,
      foreignKey: 'labelId',
      otherKey: 'postId'
    });
  }

  static config(sequelize: Sequelize): InitOptions<any> {
    return {
      sequelize,
      tableName: LABELS_TABLE,
      modelName: 'Label',
      timestamps: true
    };
  }
}

export { LABELS_TABLE, LabelSchema, Label };
