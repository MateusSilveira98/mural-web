export class Comments {
  id: number;
  sentBy: string;
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
    sentBy: string = null,
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
    this.sentBy = sentBy;
    this.senderUrl = senderUrl;
    this.activityName = activityName;
    this.knowledge = knowledge;
    this.createdAt = createdAt;
    this.relevance = relevance;
    this.answers = answers;
    this.isTutor = isTutor;
    this.description = description;
  }
}