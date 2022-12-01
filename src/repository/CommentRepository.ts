import { IComment } from 'controllers/comments/interfaces/comment.interface';
import { SingletonDatabase } from 'db/database';
import { Category } from 'db/models/categories.model';
import { Comment } from 'db/models/comments.model';
import { Post } from 'db/models/posts.model';
import { User } from 'db/models/users.model';
import { Injectable } from 'injection-js';
import { Optional, Model } from 'Sequelize';
import { IPropsBodyUpdateComment } from 'services/Comment/CommentService';

@Injectable()
export class CommentRepository {
  protected models;

  constructor() {
    this.models = SingletonDatabase.sequelize.models;
  }

  public async create(comment: Optional<any, string>): Promise<Model<IComment>> {
    const newComment = await this.models.Comment.create(comment);

    const idComment = newComment.dataValues.id;

    const commentCreated = await this.models.Comment.findByPk(idComment, {
      include: this.relationships
    });

    return commentCreated!;
  }

  public async getById(id: number): Promise<Model<IComment> | null> {
    const comment = await this.models.Comment.findByPk(id);

    return comment;
  }

  public async update({ id, comment }: IPropsBodyUpdateComment): Promise<Model<IComment>> {
    await this.models.Comment.update(
      {
        comment
      },
      {
        where: {
          id
        }
      }
    );

    const commentUpdated = await this.models.Comment.findByPk(id, {
      include: this.relationships
    });

    return commentUpdated!;
  }

  public async delete(id: number): Promise<void> {
    await this.models.Comment.destroy({
      where: {
        id
      }
    });
  }

  /*   public async findAllById(commentId: number): Promise<Model<IComment>[]> {
    const comments = await this.models.Comment.findAll({
      where: {
        commentId
      },
      include: this.relationships
    });

    return comments;
  } */

  get relationships(): any {
    return [
      {
        model: User,
        as: 'user'
      },

      {
        model: Post,
        as: 'post',
        include: [
          {
            model: Comment,
            as: 'comments',
            include: [
              {
                model: User,
                as: 'user'
              }
            ]
          },
          {
            model: Category,
            as: 'category'
          },
          {
            model: User,
            as: 'user'
          },
          'labels'
        ]
      }
    ];
  }
}
