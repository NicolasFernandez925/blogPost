import { Model } from 'Sequelize';
import { SingletonDatabase } from 'db/database';
import { Category } from 'db/models/categories.model';
import { User } from 'db/models/users.model';
import { IPostService } from './IPostService';
import { Post as IPost } from '../interfaces/post.interface';
import { Comment } from 'db/models/comments.model';

export class PostService implements IPostService {
  protected models;

  constructor() {
    this.models = SingletonDatabase.sequelize.models;
  }

  async getAll(): Promise<Array<Model<IPost>>> {
    const posts: Array<Model<IPost>> = await this.models.Post.findAll({
      include: this.relationships
    });

    return posts;
  }

  async findById(id: string): Promise<Model<IPost> | null> {
    const post: Model<IPost> | null = await this.models.Post.findOne({
      where: {
        id
      },
      include: this.relationships
    });
    return post;
  }

  get relationships(): any {
    return [
      {
        model: User,
        as: 'user'
      },
      {
        model: Category,
        as: 'category'
      },
      {
        model: Comment,
        as: 'comments',
        include: [
          {
            model: User,
            as: 'user'
          }
        ]
      }
    ];
  }
}
