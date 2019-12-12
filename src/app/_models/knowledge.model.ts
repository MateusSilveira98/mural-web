import { Activity } from './activity.model';

export class Knowledge {
  id: number;
  title: string;
  image: string;
  activities: Activity[];
  activitiesTotal: number;
  commentsTotal: number;
  constructor(
    id = null,
    title = null,
    image = null,
    activities = null
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.activities = activities;
    this.activitiesTotal = activities.length || 0;
    this.commentsTotal = activities.map(item => item.comments.length).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}