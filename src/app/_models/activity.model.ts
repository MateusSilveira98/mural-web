import { Comments } from './comments.model';

export class Activity {
  id: number;
  title: string;
  knowledge: string;
  comments: Comments[];
  likes: number;
  description: string;
  constructor(
    id: number = null,
    title: string = null,
    knowledge: string = null,
    comments: Comments[] = null,
    likes: number = null,
    description: string = null
  ) {
    this.id = id;
    this.title = title;
    this.knowledge = knowledge;
    this.comments = comments;
    this.likes = likes;
    this.description = description;
  }
}