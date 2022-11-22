import { Sequelize } from 'Sequelize';
import { User, UsersSchema } from './models/users.model';
import { Category, CategoriesSchema } from './models/categories.model';
import { Post, PostsSchema } from './models/posts.model';

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
    User.init(UsersSchema, User.config(SingletonDatabase.sequelize));
    Category.init(CategoriesSchema, Category.config(SingletonDatabase.sequelize));
    Post.init<any, any>(PostsSchema, Post.config(SingletonDatabase.sequelize));

    Category.associate(SingletonDatabase.sequelize.models);
    Post.associate(SingletonDatabase.sequelize.models);
    User.associate(SingletonDatabase.sequelize.models);
  }
}

export { SingletonDatabase };
