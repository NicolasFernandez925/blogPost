export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: number;
  title: string;
  publicationDate: Date;
  contents: string;
  status: string;
  categoryId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  category: Category;
}
