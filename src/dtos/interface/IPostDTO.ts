import { Post } from 'interfaces/post.interface';

interface IPostDTO extends Omit<Post, 'categoryId' | 'userId' | 'createdAt' | 'updatedAt' | 'category' | 'user'> {
  category: {
    name: string;
  };
  user: {
    name: string;
    email: string;
  };
}

export { IPostDTO };
