import { InjectionToken } from 'injection-js';
import { CommentRepository } from 'repository/CommentRepository';
import { CommentService } from 'services/Comment/CommentService';
import { CommentMapper } from '../mappers/CommentMapper';

export const ICommentServiceToken = new InjectionToken<CommentService>('CommentService');
export const CommentRepositoryToken = new InjectionToken<CommentRepository>('CommentRepository');
export const CommentMapperToken = new InjectionToken<CommentMapper>('CommentMapper');
