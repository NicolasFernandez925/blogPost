import { IPropsBodyComment } from './CommentService';
import { Model } from 'Sequelize';
import { IComment } from 'controllers/comments/interfaces/comment.interface';

export interface ICommentService {
  createComment: ({ post_id, comment, user_id }: IPropsBodyComment) => Promise<Model<IComment>>;
  /*  getCommentsByPostId: (postId: number) => Promise<any[]>;
  updateComment: (id: number, comment: any) => Promise<any>;
  deleteComment: (id: number) => Promise<any>; */
}
