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

export interface IUpdateComment extends Partial<IComment> {}
export interface IPropsBodyUpdateComment {
  comment: IUpdateComment;
  id: number;
}

@Injectable()
export class CommentService implements ICommentService {
  constructor(@Inject(CommentRepositoryToken) private repository: CommentRepository) {
    this.repository = repository;
  }

  public async create({ post_id, comment, user_id }: IPropsBodyComment): Promise<Model<IComment>> {
    const newComment = {
      postId: post_id,
      userId: user_id,
      comment
    };

    const result = await this.repository.create(newComment);
    return result;
  }

  public async update({ id, comment }: IPropsBodyUpdateComment): Promise<Model<IComment>> {
    if (!this.existedComment(id)) {
      throw new Error('Comment not found');
    }

    const result = await this.repository.update({ id, comment });

    return result;
  }

  public async delete(id: number): Promise<void> {
    console.log();

    if (await this.existedComment(id)) {
      throw new Error('Comment not found');
    }

    await this.repository.delete(id);
  }

  private async existedComment(id: number): Promise<boolean> {
    const comment = await this.repository.getById(id);

    return !comment;
  }

  public async findAllById(id: number): Promise<Model<IComment>[]> {
    if (await this.existedComment(id)) {
      throw new Error('Comment not found');
    }

    const result = await this.repository.findAllById(id);

    return result;
  }
}
