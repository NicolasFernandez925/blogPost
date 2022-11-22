import { Model } from 'Sequelize';
import { SingletonDatabase } from 'db/database';
import { Category } from 'db/models/categories.model';
import { User } from 'db/models/users.model';
import { IPostService } from './IPostService';
import { Post as IPost } from '../interfaces/post.interface';

export class PostService implements IPostService {
  protected models;

  constructor() {
    this.models = SingletonDatabase.sequelize.models;
  }

  async getAll(): Promise<Array<Model<IPost>>> {
    const posts: Array<Model<IPost>> = await this.models.Post.findAll({
      include: [
        {
          model: User,
          as: 'user'
        },
        {
          model: Category,
          as: 'category'
        }
      ]
    });

    return posts;
  }

  async findById(id: string): Promise<Model<IPost> | null> {
    const post: Model<IPost> | null = await this.models.Post.findOne({
      where: {
        id
      },
      include: [
        {
          model: User,
          as: 'user'
        },
        {
          model: Category,
          as: 'category'
        }
      ]
    });
    return post;
  }
}
