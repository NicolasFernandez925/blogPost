import { Model } from 'Sequelize';
import { Post as IPost } from '../interfaces/post.interface';

interface IPostService {
  getAll: () => Promise<Array<Model<IPost>>>;
  findById: (id: string) => Promise<Model<IPost> | null>;
}

export { IPostService };
