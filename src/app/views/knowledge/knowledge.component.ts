import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { Knowledge } from 'src/app/_models/knowledge.model';
import { GeneralTableConfig, GeneralTableProps } from 'src/app/_components/generaltable/generaltable.component';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent extends AppComponent implements OnInit {
  mockId: number = 1;
  knowledge: Knowledge = new Knowledge();
  activityConfig: GeneralTableConfig = new GeneralTableConfig();
  activityPage: number = 1;
  totalActivitiesPerPage: number = 2;
  constructor(private router: Router) { super(); }

  ngOnInit() {
    if (!history.state.data) this.router.navigate(['/']);
    else {
      this.knowledge = history.state.data;
      this.getActivityByPage(this.activityPage, this.totalActivitiesPerPage)
    }
    console.log(this.knowledge)
  }
  getActivityByPage(page, itemsPerPage) {
    this.activityConfig.columns = ['título', 'comentários', ''];
    this.activityConfig.props = [
      new GeneralTableProps(this.mockId++, 'title', 'string', '', '', true),
      new GeneralTableProps(this.mockId++, 'comments', 'object', 'length', '', false),
      new GeneralTableProps(this.mockId++, '', 'link', '', 'acessar', false)
    ];
    this.activityConfig.itemsPerPage = itemsPerPage;
    this.activityConfig.totalItems = this.knowledge.activities.length;
    this.activityConfig.items = this.paginateArray(page, itemsPerPage, this.knowledge.activities);
    this.activityConfig.page = page;
    this.activityConfig.itemsPerPageList = [2, 4, 6];
  }
  paginateArray(page, itemsPerPage, array) {
    return [...(
      array.filter((item, index) => (index >= ((page - 1) * itemsPerPage) && (index < (page * itemsPerPage)))
      ))
    ]
  }
  changeRoute(route, item = null) {
    this.router.navigate([`/${route}`], { state: { data: item } })
  }
}
