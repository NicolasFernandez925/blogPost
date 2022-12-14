import { NextFunction, Request, Response } from 'express';
import { Inject } from 'injection-js';
import { PostMapper } from 'controllers/Post/mappers/PostMapper';
import { BaseController } from '../BaseController';
import { IPostDTO } from 'controllers/Post/dtos/interface/IPostDTO';
import { IPostService } from 'services/Post/IPostService';
import { ICustomRequest } from 'middelwares/auth/AuthMiddelware';
import { IPostServiceToken, PostMapperToken } from './inyection/inyection.tokens';
import HttpStatusCode from 'utils/HttpStatusCode';
import { IValidator } from 'validator/IValidator';
import { IResponseValidator } from 'validator/Validator';
import { CustomError } from 'error/BaseError';
import { IValidatorToken } from 'validator/injection';

export class PostController extends BaseController {
  constructor(
    @Inject(IPostServiceToken) private postService: IPostService,
    @Inject(PostMapperToken) private mapper: PostMapper,
    @Inject(IValidatorToken) private validator: IValidator
  ) {
    super();
    this.mapper = mapper;
    this.postService = postService;
    this.validator = validator;
  }

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const posts = await this.postService.getAll();

      this.response<IPostDTO[]>({ res, status: HttpStatusCode.OK, data: this.mapper.collectionOfDto(posts) });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const _req = req as ICustomRequest;

    const { hasError, errors }: IResponseValidator = this.validator.validate(req, res, next);

    try {
      if (hasError) {
        throw new CustomError('Bad request', HttpStatusCode.BAD_REQUEST, 'Bad request', errors.array());
      }

      const post = await this.postService.create(req.body, _req.user);
      this.response<IPostDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(post) });
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    const { hasError, errors }: IResponseValidator = this.validator.validate(req, res, next);

    try {
      if (hasError) {
        throw new CustomError('Bad request', HttpStatusCode.BAD_REQUEST, 'Bad request', errors.array());
      }

      const post = await this.postService.findById(id);
      this.response<IPostDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(post!) });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    const { hasError, errors }: IResponseValidator = this.validator.validate(req, res, next);

    try {
      if (hasError) {
        throw new CustomError('Bad request', HttpStatusCode.BAD_REQUEST, 'Bad request', errors.array());
      }

      const post = await this.postService.update(id, req.body);
      this.response<IPostDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(post) });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    const { hasError, errors }: IResponseValidator = this.validator.validate(req, res, next);

    try {
      if (hasError) {
        throw new CustomError('Bad request', HttpStatusCode.BAD_REQUEST, 'Bad request', errors.array());
      }

      await this.postService.delete(id);
      this.response({ res, status: HttpStatusCode.NO_CONTENT });
    } catch (error) {
      next(error);
    }
  }
}
