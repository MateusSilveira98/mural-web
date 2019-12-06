import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/_models/comments.model';

@Component({
  selector: 'commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.scss']
})
export class CommentcardComponent implements OnInit {
  @Input() style: Object;
  @Input() isMobile: boolean = false;
  @Input() comment: Comments = new Comments();
  totalAnswers: number = 0;
  averageRate: number = 0;
  totalOpinions: number = 0;
  totalLikes: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
