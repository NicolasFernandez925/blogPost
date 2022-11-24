import { Model } from 'Sequelize';
import { SingletonDatabase } from 'db/database';
import { IPostService } from './IPostService';
import { Label, Post as IPost } from '../../controllers/Post/interfaces/post.interface';
import { PostRepository } from '../../repository/PostRepository';

export interface response {
  title: string;
  contents: string;
  status: string;
  userId: number;
  categoryId: number;
  labels: Label[];
}

export class PostService implements IPostService {
  protected models;
  protected repository: PostRepository;

  constructor(repository: PostRepository) {
    this.models = SingletonDatabase.sequelize.models;
    this.repository = repository;
  }

  async getAll(): Promise<Array<Model<IPost>>> {
    const posts: Array<Model<IPost>> = await this.repository.getAll();

    return posts;
  }

  async create(body: response): Promise<Model<IPost>> {
    const createPost = {
      title: body.title,
      contents: body.contents,
      categoryId: body.categoryId,
      userId: body.userId,
      status: body.status,
      comments: [],
      labels: body.labels
    };

    const post = await this.repository.create(createPost);

    return post;
  }

  async findById(id: string): Promise<Model<IPost> | null> {
    const post = await this.repository.findById(id);
    return post;
  }
}
