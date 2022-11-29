import { NextFunction, Request, Response } from 'express';
import { Inject } from 'injection-js';
import { BaseController } from '../../controllers/BaseController';
import { CommentMapper } from './mappers/CommentMapper';
import { CommentMapperToken, ICommentServiceToken } from './inyection/inyection';
import { ICommentService } from 'services/Comment/ICommentService';
import { ICustomRequest } from 'middelwares/auth/AuthMiddelware';
import { ICommentDTO } from './dtos/ICommentDTO';
import HttpStatusCode from '../../utils/HttpStatusCode';

export class CommentController extends BaseController {
  constructor(
    @Inject(CommentMapperToken) private mapper: CommentMapper,
    @Inject(ICommentServiceToken) private service: ICommentService
  ) {
    super();
    this.mapper = mapper;
    this.service = service;
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { post_id, comment } = req.body;
    const _req = req as ICustomRequest;
    const user_id = _req.user;

    try {
      const commentCreated = await this.service.create({ post_id, comment, user_id });
      this.ok<ICommentDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(commentCreated) });
    } catch (e) {
      next(e);
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { comment, id } = req.body;

    try {
      const commentUpdated = await this.service.update({ id, comment });
      this.ok<ICommentDTO>({ res, status: HttpStatusCode.OK, data: this.mapper.toDto(commentUpdated) });
    } catch (e) {
      next(e);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.body;

    try {
      await this.service.delete(id);
      this.ok({ res, status: HttpStatusCode.NO_CONTENT });
    } catch (e) {
      next(e);
    }
  }

  public async findAllById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    try {
      const comments = await this.service.findAllById(Number(id));
      this.ok<ICommentDTO[]>({ res, status: HttpStatusCode.OK, data: this.mapper.collectionOfDto(comments) });
    } catch (e) {
      next(e);
    }
  }
}
