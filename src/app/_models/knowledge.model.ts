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
    if (activities) {
      this.activities = activities;
      this.activitiesTotal = activities.length;
      this.commentsTotal = activities.map(item => item.comments.length).reduce((accumulator, currentValue) => accumulator + currentValue);
    } else {
      this.activities = [];
      this.activitiesTotal = 0
      this.commentsTotal = 0
    }
  }
}