import { Component, OnInit, Input } from '@angular/core';
import { Comments } from 'src/app/_models/comments.model';
import { User } from 'src/app/_models/users.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() style: Object;
  @Input() isMobile: boolean = false;
  @Input() comment: Comments = new Comments();
  totalAnswers: number = 0;
  averageRate: number = 0;
  totalOpinions: number = 0;
  totalLikes: number = 0;
  onHoverRate: number = 0;
  showTooltipRate: boolean = false;
  showTooltipLike: boolean = false;
  mockId: number = 1;
  users: User[] = [
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona1.jpg'
    ),
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona2.jpg'
    ),
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona3.jpg'
    ),
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona4.jpg'
    ),
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona5.jpg'
    ),
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona6.jpg'
    )
  ]
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  rateComment(rate, relevance) {
    this.comment.relevance = rate === relevance ? 0 : rate;
    this.showTooltipRate = true;
  }
  
}
