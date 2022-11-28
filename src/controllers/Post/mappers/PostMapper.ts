import { Post as IPost } from '../interfaces/post.interface';
import { IPostDTO } from 'controllers/Post/dtos/interface/IPostDTO';
import { Model } from 'Sequelize';
import { Mapper } from 'interfaces/mapper';
import { Injectable } from 'injection-js';

@Injectable()
class PostMapper implements Mapper<Model<IPost>, IPostDTO> {
  toDto(data: Model<IPost>): IPostDTO {
    return {
      id: data.dataValues.id,
      title: data.dataValues.title,
      publicationDate: data.dataValues.publicationDate,
      contents: data.dataValues.contents,
      status: data.dataValues.status,
      user: {
        id: data.dataValues.user.id,
        email: data.dataValues.user.email,
        name: data.dataValues.user.name
      },
      category: {
        name: data.dataValues.category.name
      },
      comments: data.dataValues.comments.map((comment) => {
        return {
          id: comment.id,
          contents: comment.contents,
          user: {
            id: comment.user.id,
            email: comment.user.email,
            name: comment.user.name
          }
        };
      }),
      labels: data.dataValues.labels.map((label) => {
        return {
          id: label.id,
          name: label.name
        };
      })
    };
  }

  collectionOfDto(data: Array<Model<IPost>>): IPostDTO[] {
    return data.map((item) => {
      return this.toDto(item);
    });
  }
}

export { PostMapper };
