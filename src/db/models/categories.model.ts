import { Model, DataTypes, Sequelize, InitOptions } from 'Sequelize';

const CATEGORIES_TABLE = 'categories';

const CategoriesSchema = {
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

class Category extends Model {
  static associate(models: any): void {
    this.hasMany(models.Post, {
      as: 'post',
      foreignKey: 'categoryId'
    });
  }

  static config(sequelize: Sequelize): InitOptions<Category> {
    return {
      sequelize,
      tableName: CATEGORIES_TABLE,
      modelName: 'Category',
      timestamps: true
    };
  }
}

export { CATEGORIES_TABLE, Category, CategoriesSchema };
