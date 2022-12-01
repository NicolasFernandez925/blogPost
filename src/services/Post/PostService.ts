import { Model } from 'Sequelize';
import { IPostService } from './IPostService';
import { Label, Post as IPost } from '../../controllers/Post/interfaces/post.interface';
import { PostRepository } from '../../repository/PostRepository';
import { Inject, Injectable } from 'injection-js';
import { PostRepositoryToken } from 'controllers/Post/inyection/inyection.tokens';

export interface ICreatedPost {
  title: string;
  contents: string;
  status: string;
  category_id: number;
  labels: Label[];
}

export interface IUpdatePost extends Partial<ICreatedPost> {}

@Injectable()
export class PostService implements IPostService {
  constructor(@Inject(PostRepositoryToken) private repository: PostRepository) {
    this.repository = repository;
  }

  async getAll(): Promise<Array<Model<IPost>>> {
    const posts: Array<Model<IPost>> = await this.repository.getAll();

    return posts;
  }

  async create(body: ICreatedPost, idUser: number): Promise<Model<IPost>> {
    const createPost = {
      title: body.title,
      contents: body.contents,
      categoryId: body.category_id,
      userId: idUser,
      status: body.status,
      comments: [],
      labels: body.labels
    };

    const post = await this.repository.create(createPost);

    return post;
  }

  async findById(id: string): Promise<Model<IPost> | null> {
    const post = await this.repository.findById(id);

    if (post === null) {
      throw new Error('the post was not found ' + id);
    }

    return post;
  }

  async update(id: string, body: IUpdatePost): Promise<Model<IPost>> {
    if (await this.existedPost(Number(id))) {
      throw new Error('Post not found');
    }

    const updatePost = {
      title: body.title,
      contents: body.contents,
      categoryId: body.category_id,
      status: body.status,
      labels: body.labels
    };

    const post = await this.repository.update(id, updatePost);

    return post;
  }

  async delete(id: string): Promise<void> {
    if (await this.existedPost(Number(id))) {
      throw new Error('Post not found');
    }

    await this.repository.delete(id);
  }

  private async existedPost(id: number): Promise<boolean> {
    const post = await this.repository.getById(id);

    return !post;
  }
}
