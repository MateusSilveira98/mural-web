import { Component, OnInit } from '@angular/core';
import * as themes from '../../themes.json';
import _ from 'lodash';
import { FilterTableConfig } from '../_components/filtertable/filtertable.component.js';
import { Activity } from '../_models/activity.model.js';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  knowledgePage1: any[] = [1, 2, 3, 4];
  knowledgePage2: any[] = [5, 6, 7, 8];
  knowledgePage3: any[] = [9, 10, 11, 12];
  totalKnowledges: number = 12;
  knowledges: any[] = [];
  knowledgePage: number = 1;

  activityConfig: FilterTableConfig = new FilterTableConfig();
  mockActivityId: number = 1;
  activities: any[] = [
    new Activity(
      ++this.mockActivityId,
      'Desafio 3.2 - Momento Oráculo - Transformação Digital e as Relações com o Cliente Externo',
      'Gestão Empresarial',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999)
    ),
    new Activity(
      ++this.mockActivityId,
      'Desafio 3.1 - Momento Oráculo - Transformação Digital e as Relações com o Cliente Interno',
      'Gestão Empresarial',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999)
    ),
    new Activity(
      ++this.mockActivityId,
      'Desafio 3.4 - Youtubers BB - Atendimento Digital e as Relações com o Cliente Externo',
      'Gestão de Pessoas',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999)
    ),
    new Activity(
      ++this.mockActivityId,
      'Desafio 2.2: Atividade colaborativa Transformação Digital e o BB',
      'Gestão de Pessoas',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999)
    ),
    new Activity(
      ++this.mockActivityId,
      'Desafio 1.2 Momento Oráculo - Cursos',
      'Gestão de T.I',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999)
    )
  ];
  activityPage: number = 1;
  totalActivitiesPerPage: number = 2;

  styleConfig: Object = themes.bancodobrasil;
  isMobile: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getKnowledgesByPage(this.knowledgePage);
    this.getActivityByPage(this.activityPage, this.totalActivitiesPerPage);
    this.isMobile = window.screen.width <= 1024;
  }
  getKnowledgesByPage(page) {
    this.knowledgePage = page;
    if (!this.isMobile) {
      switch (page) {
        case 1: this.knowledges = this.mountMockKnowledge(this.knowledgePage1); break;
        case 2: this.knowledges = this.mountMockKnowledge(this.knowledgePage2); break;
        case 3: this.knowledges = this.mountMockKnowledge(this.knowledgePage3); break;
        default: this.knowledges = []; break;
      }
    } else {
      switch (page) {
        case 1:
          this.knowledges = _.union(this.knowledges, this.mountMockKnowledge(this.knowledgePage1));
          break;
        case 2:
          this.knowledges = _.union(this.knowledges, this.mountMockKnowledge(this.knowledgePage2));
          break;
        case 3:
          this.knowledges = _.union(this.knowledges, this.mountMockKnowledge(this.knowledgePage3));
          break;
        default: this.knowledges = []; break;
      }
    }
  }
  getActivityByPage(page, itemsPerPage) {
    this.activityConfig.columns = ['título', 'conhecimento', 'comentários', 'curtidas', ''];
    this.activityConfig.props = [
      {
        id: ++this.mockActivityId,
        name: 'title',
        type: 'string',
        attribute: '',
        html: '',
        bold: true
      },
      {
        id: ++this.mockActivityId,
        name: 'knowledge',
        type: 'string',
        attribute: '',
        html: '',
        bold: false
      },
      {
        id: ++this.mockActivityId,
        name: 'comments',
        type: 'string',
        attribute: '',
        html: '',
        bold: false
      },
      {
        id: ++this.mockActivityId,
        name: 'likes',
        type: 'string',
        attribute: '',
        html: '',
        bold: false
      },
      {
        id: ++this.mockActivityId,
        name: '',
        type: 'action',
        attribute: '',
        html: this.button(),
        bold: false
      }
    ];
    this.activityConfig.itemsPerPage = itemsPerPage;
    this.activityConfig.totalItems = this.activities.length;
    this.activityConfig.items = this.paginateArray(page, itemsPerPage, this.activities);
    this.activityConfig.page = page;
    this.activityConfig.itemsPerPageList = [2, 4, 6];
  }
  paginateArray(page, itemsPerPage, array) {
    return [...(
        array.filter((item, index) => (index >= ((page - 1) * itemsPerPage) && (index < (page * itemsPerPage)))
      ))
    ]
  }
  mountMockKnowledge(array) {
    return array.map((n) => {
      return {
        title: `Título ${n}`,
        activitiesTotal: Math.floor(Math.random() * 10),
        commentsTotal: Math.floor(Math.random() * 10),
        image: `https://picsum.photos/id/${n}/900/500`
      }
    });
  }
  button() {
    return `
      <a class="btn table-button cursor-pointer">Acessar</a>
    `
  }
}
