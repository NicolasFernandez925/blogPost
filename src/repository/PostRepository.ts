import { Model, Optional } from 'Sequelize';
import { Comment } from '../db/models/comments.model';
import { SingletonDatabase } from '../db/database';
import { Category } from '../db/models/categories.model';
import { User } from '../db/models/users.model';
import { Post as IPost } from '../controllers/Post/interfaces/post.interface';
import { Injectable } from 'injection-js';

interface ILabel {
  id: number;
  name: string;
}

interface IConvert extends Model<any, any> {
  addLabels: (labels: any) => Promise<any>;
  setLabels: (labels: any) => Promise<any>;
}
@Injectable()
export class PostRepository {
  protected models;

  constructor() {
    this.models = SingletonDatabase.sequelize.models;
  }

  async getAll(): Promise<Array<Model<IPost>>> {
    const posts: Array<Model<IPost>> = await this.models.Post.findAll({
      include: this.relationships
    });

    return posts;
  }

  async findById(id: string): Promise<Model<IPost> | null> {
    const post: Model<IPost> | null = await this.models.Post.findOne({
      where: {
        id
      },
      include: this.relationships
    });
    return post;
  }

  async create(post: Optional<any, string>): Promise<Model<IPost>> {
    // en la tabla labels solo agrego los nuevos labels que no existan
    const labels = await Promise.all(
      post.labels.map((tag: ILabel) => this.models.Label.findOrCreate({ where: { name: tag.name } }))
    );

    const newPost = (await this.models.Post.create(post)) as IConvert;

    const labelsMapped = labels.map((item) => item[0]);

    // agrego a la tabla intermedia todos los labels
    await newPost.addLabels(labelsMapped);

    const postCreated = await this.models.Post.findByPk(newPost.dataValues.id, {
      include: this.relationships
    });

    return postCreated!;
  }

  async update(id: string, post: Optional<any, string>): Promise<Model<IPost>> {
    await this.models.Post.update(
      { ...post },
      {
        where: {
          id
        }
      }
    );
    const labelsCreated = await Promise.all(
      post.labels.map((tag: ILabel) => this.models.Label.findOrCreate({ where: { name: tag.name } }))
    );

    const labels = labelsCreated.map((item) => item[0]);

    const findPost = (await this.models.Post.findOne({ where: { id }, include: this.relationships })) as IConvert;

    // reemplaza por los registros anteriores si existe
    await findPost.setLabels(labels);

    const postFinal = await this.models.Post.findOne({ where: { id }, include: this.relationships });

    return postFinal!;
  }

  async delete(id: string): Promise<void> {
    await this.models.Post.destroy({
      where: {
        id
      }
    });
  }

  async getById(id: number): Promise<Model<IPost> | null> {
    const comment = await this.models.Post.findByPk(id);
    return comment;
  }

  get relationships(): any {
    return [
      {
        model: User,
        as: 'user'
      },
      {
        model: Category,
        as: 'category'
      },
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
      'labels'
    ];
  }
}
