import { Comment } from '../db/models/comments.model';
import { SingletonDatabase } from '../db/database';
import { Category } from '../db/models/categories.model';
import { User } from '../db/models/users.model';
import { Model, Optional } from 'Sequelize';
import { Post as IPost } from '../controllers/Post/interfaces/post.interface';

export class PostRepository {
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

  async create(post: Optional<any, string>): Promise<Model<IPost>> {
    const newPost = await this.models.Post.create(post, {
      include: ['labels']
    });

    const idPost = newPost.dataValues.id;

    const postCreated = await this.models.Post.findByPk(idPost, {
      include: this.relationships
    });

    return postCreated!;
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
      },
      'labels'
    ];
  }
}
