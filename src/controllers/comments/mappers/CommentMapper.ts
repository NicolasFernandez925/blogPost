import { Model } from 'Sequelize';
import { Mapper } from 'interfaces/mapper';
import { ICommentDTO } from '../dtos/ICommentDTO';
import { IComment } from '../interfaces/comment.interface';

export class CommentMapper implements Mapper<Model<IComment>, ICommentDTO> {
  public toDto(data: Model<IComment>): ICommentDTO {
    console.log(data.dataValues.post.comments[0].comment);

    return {
      id: data.dataValues.id,
      comment: data.dataValues.comment,
      user: {
        id: data.dataValues.user.id,
        email: data.dataValues.user.email,
        name: data.dataValues.user.name
      },
      post: {
        id: data.dataValues.post.id,
        title: data.dataValues.post.title,
        publicationDate: data.dataValues.post.publicationDate,
        contents: data.dataValues.post.contents,
        status: data.dataValues.post.status,
        category: {
          name: data.dataValues.post.category.name
        },
        user: {
          id: data.dataValues.post.user.id,
          email: data.dataValues.post.user.email,
          name: data.dataValues.post.user.name
        },
        comments: data.dataValues.post.comments.map((comment) => ({
          id: comment.id,
          contents: comment.comment,
          user: {
            id: comment.user.id,
            email: comment.user.email,
            name: comment.user.name
          }
        })),
        labels: data.dataValues.post.labels.map((label) => {
          return {
            id: label.id,
            name: label.name
          };
        })
      }
    };
  }
}
