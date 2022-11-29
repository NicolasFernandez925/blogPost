import { NextFunction, Request, Response } from 'express';
import { Inject } from 'injection-js';
import { BaseController } from '../../controllers/BaseController';
import { CommentMapper } from './mappers/CommentMapper';
import { CommentMapperToken, ICommentServiceToken } from './inyection/inyection';
import { ICommentService } from 'services/Comment/ICommentService';
import { ICustomRequest } from 'middelwares/auth/AuthMiddelware';
import { ICommentDTO } from './dtos/ICommentDTO';

export class CommentController extends BaseController {
  constructor(
    @Inject(CommentMapperToken) private mapper: CommentMapper,
    @Inject(ICommentServiceToken) private service: ICommentService
  ) {
    super();
    this.mapper = mapper;
    this.service = service;
  }

  public async createComment(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { post_id, comment } = req.body;
    const _req = req as ICustomRequest;
    const user_id = _req.user;

    try {
      const commentCreated = await this.service.createComment({ post_id, comment, user_id });
      this.ok<ICommentDTO>(res, this.mapper.toDto(commentCreated));
    } catch (e) {
      next(e);
    }
  }
}
