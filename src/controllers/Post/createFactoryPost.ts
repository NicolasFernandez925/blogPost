import { PostRepository } from '../../repository/PostRepository';
import { PostService } from '../../services/Post/PostService';
import { PostMapper } from './mappers/PostMapper';
import { PostController } from './PostController';

const mapper = new PostMapper();
const repository = new PostRepository();
const postService = new PostService(repository);
const createFactoryPost = new PostController(postService, mapper);

export { createFactoryPost };
