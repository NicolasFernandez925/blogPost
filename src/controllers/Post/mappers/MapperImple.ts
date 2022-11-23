import { Comment, Post as IPost } from '../../../interfaces/post.interface';
import { IPostDTO } from 'dtos/interface/IPostDTO';
import { Model } from 'Sequelize';
import { Mapper } from 'interfaces/mapper';

class PostMapper implements Mapper<Model<IPost>, IPostDTO> {
  toDto(data: Model<IPost>): IPostDTO {
    return {
      id: data.dataValues.id,
      title: data.dataValues.title,
      publicationDate: data.dataValues.publicationDate,
      contents: data.dataValues.contents,
      status: data.dataValues.status,
      user: {
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
            email: comment.user.email,
            name: comment.user.name
          }
        };
      }) as Comment[]
    };
  }

  arrayToDto(data: Array<Model<IPost>>): IPostDTO[] {
    return data.map((item) => {
      return this.toDto(item);
    });
  }
}

export { PostMapper };
