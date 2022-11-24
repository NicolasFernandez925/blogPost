import { Post } from 'controllers/Post/interfaces/post.interface';
import { IUserDTO } from 'controllers/User/dtos/IUserDTO';

interface IPostDTO extends Omit<Post, 'category' | 'user'> {
  category: {
    name: string;
  };
  user: IUserDTO;
}

export { IPostDTO };
