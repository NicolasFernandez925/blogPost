import { Model } from 'Sequelize';
import { Post as IPost } from '../../controllers/Post/interfaces/post.interface';
import { response } from './PostService';

interface IPostService {
  getAll: () => Promise<Array<Model<IPost>>>;
  findById: (id: string) => Promise<Model<IPost> | null>;
  create: (body: response, idUser: number) => Promise<Model<IPost>>;
}

export { IPostService };
