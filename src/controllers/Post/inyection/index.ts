import { ReflectiveInjector } from 'injection-js';
import { PostRepository } from 'repository/PostRepository';
import { PostService } from 'services/Post/PostService';
import { PostMapper } from '../mappers/PostMapper';
import { PostController } from '../PostController';
import { IPostServiceToken, IValidatorToken, PostMapperToken, PostRepositoryToken } from './inyection.tokens';
import { Validator } from 'validator/Validator';

const providers = [
  // example : when the token provided in the "provide" key is called, the class provided in the "class" key is injected
  { provide: IPostServiceToken, useClass: PostService },
  { provide: PostRepositoryToken, useClass: PostRepository },
  { provide: PostMapperToken, useClass: PostMapper },
  { provide: IValidatorToken, useClass: Validator },
  PostController
];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const postController = injector.get(PostController);

export { postController };
