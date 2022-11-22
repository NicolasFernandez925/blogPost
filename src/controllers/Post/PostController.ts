import { NextFunction, Request, Response } from 'express';
import { PostMapper } from 'controllers/Post/mappers/MapperImple';
import { BaseController } from '../BaseController';
import { IPostDTO } from 'dtos/interface/IPostDTO';
import { IPostService } from 'services/IPostService';

export class PostController extends BaseController {
  protected postService: IPostService;
  protected mapper: PostMapper;

  constructor(postService: IPostService, mapper: PostMapper) {
    super();
    this.mapper = mapper;
    this.postService = postService;
  }

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      /* console.log(posts[0].dataValues); */
      const posts = await this.postService.getAll();

      this.ok<IPostDTO[]>(res, this.mapper.arrayToDto(posts));
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      const post = await this.postService.findById(id);

      if (post === null) {
        throw new Error('the post was not found ' + id);
      }

      this.ok<IPostDTO>(res, this.mapper.toDto(post));
    } catch (error) {
      next(error);
    }
  }
}
