import { Model, DataTypes, Sequelize, InitOptions } from 'Sequelize';
import { POSTS_TABLE } from './posts.model';
import { USERS_TABLE } from './users.model';

const COMMENTS_TABLE = 'comments';

const CommentsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  comment: {
    allowNull: false,
    type: DataTypes.TEXT
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

  postId: {
    field: 'post_id',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: POSTS_TABLE,
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

class Comment extends Model<any> {
  static associate(models: any): void {
    this.belongsTo(models.Post, {
      as: 'post'
    });

    this.belongsTo(models.User, {
      as: 'user'
    });
  }

  static config(sequelize: Sequelize): InitOptions<any> {
    return {
      sequelize,
      tableName: COMMENTS_TABLE,
      modelName: 'Comment',
      timestamps: true
    };
  }
}

export { COMMENTS_TABLE, Comment, CommentsSchema };
