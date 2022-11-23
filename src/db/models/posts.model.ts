import { Model, DataTypes, Sequelize, InitOptions } from 'Sequelize';
import { CATEGORIES_TABLE } from './categories.model';
import { USERS_TABLE } from './users.model';
import { Post as IPost } from '../../interfaces/post.interface';

const POSTS_TABLE = 'posts';

const PostsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING(150)
  },
  publicationDate: {
    field: 'publication_date',
    allowNull: false,
    type: DataTypes.DATE
  },
  contents: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING(10)
  },

  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: CATEGORIES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },

  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: USERS_TABLE,
      key: 'id'
    }
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

class Post extends Model<IPost> {
  static associate(models: any): void {
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

  static config(sequelize: Sequelize): InitOptions<Post> {
    return {
      sequelize,
      tableName: POSTS_TABLE,
      modelName: 'Post',
      timestamps: true
    };
  }
}

export { POSTS_TABLE, Post, PostsSchema };
