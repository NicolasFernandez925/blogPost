import { IPropsBodyComment, IPropsBodyUpdateComment } from './CommentService';
import { Model } from 'Sequelize';
import { IComment } from 'controllers/comments/interfaces/comment.interface';

export interface ICommentService {
  create: ({ post_id, comment, user_id }: IPropsBodyComment) => Promise<Model<IComment>>;
  findAllById: (postId: number) => Promise<Model<IComment>[]>;
  update: ({ id, comment }: IPropsBodyUpdateComment) => Promise<Model<IComment>>;
  delete: (id: number) => Promise<void>;
}
