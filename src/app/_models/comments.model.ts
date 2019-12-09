export class Comments {
  id: number;
  author: string;
  senderUrl: string;
  activityName: string;
  knowledge: string;
  createdAt: string;
  relevance: number;
  answers: Comments[];
  isTutor: boolean;
  description: string;
  read: boolean;
  constructor(
    id: number = null,
    author: string = null,
    senderUrl: string = null,
    activityName: string = null,
    knowledge: string = null,
    createdAt: string = null,
    relevance: number = null,
    answers: Comments[] = null,
    isTutor: boolean = false,
    description: string = null,
    read: boolean = false
  ) {
    this.id = id;
    this.author = author;
    this.senderUrl = senderUrl;
    this.activityName = activityName;
    this.knowledge = knowledge;
    this.createdAt = createdAt;
    this.relevance = relevance;
    this.answers = answers;
    this.isTutor = isTutor;
    this.description = description;
    this.read = read;
  }
}