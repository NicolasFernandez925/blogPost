import { PostService } from 'services/PostService';
import { PostMapper } from './mappers/MapperImple';
import { PostController } from './PostController';

const postService = new PostService();
const mapper = new PostMapper();
const createPostController = new PostController(postService, mapper);

export { createPostController };
