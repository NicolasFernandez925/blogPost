import { Post, User } from 'controllers/Post/interfaces/post.interface';

export interface IComment {
  id: number;
  comment: string;
  userId: number;
  postId: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  post: Post;
}
