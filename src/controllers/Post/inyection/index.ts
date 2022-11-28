import { ReflectiveInjector } from 'injection-js';
import { PostRepository } from 'repository/PostRepository';
import { PostService } from 'services/Post/PostService';
import { PostMapper } from '../mappers/PostMapper';
import { PostController } from '../PostController';
import { IPostServiceToken, PostMapperToken, PostRepositoryToken } from './inyection.tokens';

const providers = [
  { provide: IPostServiceToken, useClass: PostService },
  { provide: PostRepositoryToken, useClass: PostRepository },
  { provide: PostMapperToken, useClass: PostMapper },

  PostController
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const postController = injector.get(PostController);

export { postController };
