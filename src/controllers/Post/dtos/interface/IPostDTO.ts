import { Post } from 'controllers/Post/interfaces/post.interface';
import { IUserDTO } from 'controllers/User/dtos/IUserDTO';

export interface ICommentsDTO {
  id: number;
  contents: string;
  user: IUserDTO;
}

interface IPostDTO extends Omit<Post, 'category' | 'user' | 'comments'> {
  category: {
    name: string;
  };
  user: IUserDTO;
  comments: ICommentsDTO[];
}

export { IPostDTO };
