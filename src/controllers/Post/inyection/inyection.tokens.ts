import { InjectionToken } from 'injection-js';
import { PostRepository } from 'repository/PostRepository';
import { PostService } from 'services/Post/PostService';
import { PostMapper } from '../mappers/PostMapper';

export const IPostServiceToken = new InjectionToken<PostService>('IPostService');
export const PostRepositoryToken = new InjectionToken<PostRepository>('PostRepository');
export const PostMapperToken = new InjectionToken<PostMapper>('PostMapper');
