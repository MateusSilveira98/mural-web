export class Comments {
  id: number = 0;
  sentBy: string = '';
  senderUrl: string = '';
  title: string = '';
  knowledge: string = '';
  createdAt: string = '';
  relevance: number = 0;
  constructor(
    id: number = 0,
    sentBy: string = '',
    senderUrl: string = '',
    title: string = '',
    knowledge: string = '',
    createdAt: string = '',
    relevance: number = 0
  ) {
    this.id = id;
    this.sentBy = sentBy;
    this.senderUrl = senderUrl;
    this.title = title;
    this.knowledge = knowledge;
    this.createdAt = createdAt;
    this.relevance = relevance;

  }
}