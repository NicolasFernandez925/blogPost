import { Sequelize } from 'Sequelize';
import { User, UsersSchema } from './models/users.model';
import { Category, CategoriesSchema } from './models/categories.model';
import { Post, PostsSchema } from './models/posts.model';
import { LabelPost, LabelsPostSchema } from './models/labels-posts.model';
import { Label, LabelSchema } from './models/labels.model';
import { Comment, CommentsSchema } from './models/comments.model';

interface IProps {
  nameDb: string;
  userNameDb: string;
  passwordDb: string;
  configDb: Record<string, string>;
}

class SingletonDatabase {
  public static instance: SingletonDatabase;
  public static sequelize: Sequelize;

  private constructor({ nameDb, userNameDb, passwordDb, configDb }: IProps) {
    SingletonDatabase.sequelize = new Sequelize(nameDb, userNameDb, passwordDb, configDb);
    this.setupModels();
  }

  static create({ nameDb, userNameDb, passwordDb, configDb }: IProps): SingletonDatabase {
    if (SingletonDatabase.instance === undefined) {
      SingletonDatabase.instance = new SingletonDatabase({ nameDb, userNameDb, passwordDb, configDb });
    }
    return SingletonDatabase.instance;
  }

  private setupModels(): void {
    User.init<any, any>(UsersSchema, User.config(SingletonDatabase.sequelize));
    Category.init<any, any>(CategoriesSchema, Category.config(SingletonDatabase.sequelize));
    Post.init<any, any>(PostsSchema, Post.config(SingletonDatabase.sequelize));
    Label.init<any, any>(LabelSchema, Label.config(SingletonDatabase.sequelize));
    LabelPost.init<any, any>(LabelsPostSchema, LabelPost.config(SingletonDatabase.sequelize));
    Comment.init<any, any>(CommentsSchema, Comment.config(SingletonDatabase.sequelize));

    Category.associate(SingletonDatabase.sequelize.models);
    Post.associate(SingletonDatabase.sequelize.models);
    User.associate(SingletonDatabase.sequelize.models);
    Label.associate(SingletonDatabase.sequelize.models);
    Comment.associate(SingletonDatabase.sequelize.models);
  }
}

export { SingletonDatabase };
