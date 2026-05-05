export type View = 'feed' | 'event' | 'videos' | 'marketplace';

export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
  author: Partial<User>;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  day: string;
  month: string;
  image: string;
  participants: string[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  ratingValue: number;
  ratingCount: number;
  condition: 'New' | 'Second Hand';
}
