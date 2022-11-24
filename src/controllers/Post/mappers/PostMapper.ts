import { Post as IPost } from '../interfaces/post.interface';
import { IPostDTO } from 'controllers/Post/dtos/interface/IPostDTO';
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
        id: data.dataValues.user.id,
        email: data.dataValues.user.email,
        name: data.dataValues.user.name
      },
      category: {
        name: data.dataValues.category.name
      },
      comments: data.dataValues.comments,
      labels: data.dataValues.labels
    };
  }

  collectionOfDto(data: Array<Model<IPost>>): IPostDTO[] {
    return data.map((item) => {
      return this.toDto(item);
    });
  }
}

export { PostMapper };
