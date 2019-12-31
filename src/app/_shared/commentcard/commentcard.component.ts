import { Component, OnInit, Input, SimpleChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { Comments } from 'src/app/_models/comments.model';
import { User } from 'src/app/_models/users.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CKEditor4, CKEditorModule, CKEditorComponent } from 'ckeditor4-angular';
@Component({
  selector: 'commentcard',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() style: Object;
  @Input() isMobile: boolean = false;
  @Input() loading: boolean = false;
  @Input() comment: Comments = new Comments();
  @ViewChild('testId', { static: false }) editor: any;
  totalAnswers: number = 0;
  averageRate: number = 0;
  totalOpinions: number = 0;
  totalLikes: number = 0;
  onHoverRate: number = 0;
  showTooltipRate: boolean = false;
  showTooltipLike: boolean = false;
  mockId: number = 1;
  message: string = '';
  users: User[] = [
    new User(
      ++this.mockId,
      'Thiago Ventura',
      'assets/images/persona1.jpg'
    ),
    new User(
      ++this.mockId,
      'Teresa Cristina',
      'assets/images/persona1.jpg'
    ),
    new User(
      ++this.mockId,
      'Gilmar Mendes',
      'assets/images/persona2.jpg'
    ),
    new User(
      ++this.mockId,
      'Jair Bolsonaro',
      'assets/images/persona3.jpg'
    ),
    new User(
      ++this.mockId,
      'Luiz Inácio Lula da Silva',
      'assets/images/persona4.jpg'
    ),
    new User(
      ++this.mockId,
      'Enéias Carneiro',
      'assets/images/persona5.jpg'
    ),
    new User(
      ++this.mockId,
      'Atilla Jacomussi',
      'assets/images/persona6.jpg'
    )
  ];
  editorData: any;
  editorConfig = {
    extraPlugins: ['mentions', 'autocomplete', 'textmatch', 'ajax', 'textwatcher', 'xml'],
    mentions: [
      {
        feed: this.users.map(item => item.name),
        minChars: 0,
        outputTemplate: `<b>{name}</b> `
      }
    ]
  }
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }
  getEditorRef(editor) {
    setTimeout( () => {
      console.log(this.editor)
      console.log(editor)
    }, 1000
    )
  }
  ngOnChanges(changes: SimpleChanges) {
    const loading: SimpleChange = changes.loading;
    this.loading = loading ? loading.currentValue : this.loading;
  }
  rateComment(rate, relevance) {
    this.comment.relevance = rate === relevance ? 0 : rate;
    this.showTooltipRate = true;
  }
  showEditorData(editorData) {
    console.log(editorData)
  }
}
