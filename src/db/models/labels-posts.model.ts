import { Model, DataTypes, Sequelize, InitOptions } from 'Sequelize';
import { LABELS_TABLE } from './labels.model';
import { POSTS_TABLE } from './posts.model';

const LABELS_POSTS_TABLE = 'labels_posts';

const LabelsPostSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  postId: {
    field: 'post_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: POSTS_TABLE,
      key: 'id'
    }
  },
  labelId: {
    field: 'label_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LABELS_TABLE,
      key: 'id'
    }
  }
};

class LabelPost extends Model<any> {
  /* static associate(models: any): void {} */

  static config(sequelize: Sequelize): InitOptions<LabelPost> {
    return {
      sequelize,
      tableName: LABELS_POSTS_TABLE,
      modelName: 'LabelPost',
      timestamps: false
    };
  }
}

export { LABELS_POSTS_TABLE, LabelPost, LabelsPostSchema };
