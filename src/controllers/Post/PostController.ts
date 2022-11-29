import { NextFunction, Request, Response } from 'express';
import { Inject } from 'injection-js';
import { PostMapper } from 'controllers/Post/mappers/PostMapper';
import { BaseController } from '../BaseController';
import { IPostDTO } from 'controllers/Post/dtos/interface/IPostDTO';
import { IPostService } from 'services/Post/IPostService';
import { ICustomRequest } from 'middelwares/auth/AuthMiddelware';
import { IPostServiceToken, PostMapperToken } from './inyection/inyection.tokens';
import HttpStatusCode from 'utils/HttpStatusCode';

export class PostController extends BaseController {
  constructor(
    @Inject(IPostServiceToken) private postService: IPostService,
    @Inject(PostMapperToken) private mapper: PostMapper
  ) {
    super();
    this.mapper = mapper;
    this.postService = postService;
  }

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const posts = await this.postService.getAll();

      this.ok<IPostDTO[]>({ res, status: HttpStatusCode.OK, data: this.mapper.collectionOfDto(posts) });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const _req = req as ICustomRequest;

    try {
      const post = await this.postService.create(req.body, _req.user);

      this.ok<IPostDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(post) });
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      const post = await this.postService.findById(id);
      this.ok<IPostDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(post!) });
    } catch (error) {
      next(error);
    }
  }
}
