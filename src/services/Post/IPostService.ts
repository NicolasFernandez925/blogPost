import { Model } from 'Sequelize';
import { Post as IPost } from '../../controllers/Post/interfaces/post.interface';
import { ICreatedPost, IUpdatePost } from './PostService';

interface IPostService {
  getAll: () => Promise<Array<Model<IPost>>>;
  findById: (id: string) => Promise<Model<IPost> | null>;
  create: (body: ICreatedPost, idUser: number) => Promise<Model<IPost>>;
  update: (id: string, body: IUpdatePost) => Promise<Model<IPost>>;
  delete: (id: string) => Promise<void>;
}

export { IPostService };
