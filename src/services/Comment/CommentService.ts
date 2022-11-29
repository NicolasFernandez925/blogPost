import { IComment } from 'controllers/comments/interfaces/comment.interface';
import { CommentRepositoryToken } from 'controllers/comments/inyection/inyection';
import { Inject, Injectable } from 'injection-js';
import { CommentRepository } from 'repository/CommentRepository';
import { ICommentService } from './ICommentService';
import { Model } from 'Sequelize';

export interface IPropsBodyComment {
  comment: string;
  post_id: number;
  user_id: number;
}

@Injectable()
export class CommentService implements ICommentService {
  constructor(@Inject(CommentRepositoryToken) private repository: CommentRepository) {
    this.repository = repository;
  }

  public async createComment({ post_id, comment, user_id }: IPropsBodyComment): Promise<Model<IComment>> {
    const newComment = {
      postId: post_id,
      userId: user_id,
      comment
    };

    const result = await this.repository.create(newComment);
    return result;
  }
}
