import { ReflectiveInjector } from 'injection-js';
import { CommentRepository } from 'repository/CommentRepository';
import { CommentService } from '../../../services/Comment/CommentService';
import { CommentMapper } from '../mappers/CommentMapper';
import { CommentController } from '../CommentController';
import { CommentRepositoryToken, ICommentServiceToken, CommentMapperToken } from './inyection';

const providers = [
  { provide: ICommentServiceToken, useClass: CommentService },
  { provide: CommentRepositoryToken, useClass: CommentRepository },
  { provide: CommentMapperToken, useClass: CommentMapper },
  CommentController
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const commentController = injector.get(CommentController);

export { commentController };
