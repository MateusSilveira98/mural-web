export class Activity {
  id: number;
  title: string;
  knowledge: string;
  comments: number;
  likes: number;
  constructor(id: number, title: string, knowledge: string, comments: number, likes: number) {
    this.id = id;
    this.title = title;
    this.knowledge = knowledge;
    this.comments = comments;
    this.likes = likes;
  }
}