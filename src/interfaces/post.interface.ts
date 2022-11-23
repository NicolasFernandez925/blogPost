export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  publicationDate: Date;
  contents: string;
  status: string;
  user: User;
  category: Category;
  comments: Comment[];
}

export interface Comment {
  id: number;
  contents: string;
  user: User;
}
