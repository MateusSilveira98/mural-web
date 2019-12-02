export class Activity {
  id: number;
  title: string;
  knowledge: string;
  comments: number;
  likes: number;
  constructor(id: number = null, title: string = null , knowledge: string = null, comments: number = null, likes: number = null) {
    this.id = id;
    this.title = title;
    this.knowledge = knowledge;
    this.comments = comments;
    this.likes = likes;
  }
}