import { IPostDTO } from 'controllers/Post/dtos/interface/IPostDTO';
import { IUserDTO } from 'controllers/User/dtos/IUserDTO';

export interface ICommentDTO {
  id: number;
  comment: string;
  user: IUserDTO;
  post: IPostDTO;
}
