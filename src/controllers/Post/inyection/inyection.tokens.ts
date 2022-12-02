import { InjectionToken } from 'injection-js';
import { PostRepository } from 'repository/PostRepository';
import { PostService } from 'services/Post/PostService';
import { Validator } from 'validator/Validator';
import { PostMapper } from '../mappers/PostMapper';

export const IPostServiceToken = new InjectionToken<PostService>('IPostService');
export const PostRepositoryToken = new InjectionToken<PostRepository>('PostRepository');
export const PostMapperToken = new InjectionToken<PostMapper>('PostMapper');
export const IValidatorToken = new InjectionToken<Validator>('IValidator');
