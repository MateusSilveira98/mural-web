import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import * as themes from '../../themes.json';
import moment from 'moment';
import _ from 'lodash';
import { Activity } from '../_models/activity.model.js';
import { Comments } from '../_models/comments.model.js';
import { FilterConfig, FilterOptions } from '../_components/filter/filter.component.js';
import { GeneralTableConfig, GeneralTableProps } from '../_components/generaltable/generaltable.component.js';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component.js';
// const tableStyle = {
//   pagination: `
//     ::ng-deep .pagination .page-item.active .page-link {
//       color: ${themes.bancodobrasil.primary.main}!important;
//     }
//     ::ng-deep .pagination .page-item.disabled .page-link {
//       color: ${themes.bancodobrasil.secondary.main}!important;
//     }
//     ::ng-deep .pagination .page-item:last-child .page-link, ::ng-deep .pagination .page-item:first-child .page-link {
//       color: ${themes.bancodobrasil.primary.main}!important;
//     }
//     ::ng-deep .pagination .page-link {
//       color: ${themes.bancodobrasil.secondary.main}!important;
//     }
//   `
// }
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent extends AppComponent implements OnInit {
  knowledgePage1: any[] = [1, 2, 3, 4];
  knowledgePage2: any[] = [5, 6, 7, 8];
  knowledgePage3: any[] = [9, 10, 11, 12];
  totalKnowledges: number = 12;
  knowledges: any[] = [];
  knowledgePage: number = 1;

  activityConfig: GeneralTableConfig = new GeneralTableConfig();
  commentsConfig: GeneralTableConfig = new GeneralTableConfig();
  mockId: number = 1;
  activities: Activity[] = [
    new Activity(
      ++this.mockId,
      'Desafio 3.2 - Momento Oráculo - Transformação Digital e as Relações com o Cliente Externo',
      'Gestão Empresarial',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999),
      'Este é o primeiro momento de atuação do oráculo. Aqui, vocês deverão discutir sobre os principais pontos das videoaulas que fazem parte do desafio 1.1 e elencar de que forma eles podem se materializar na prática, considerando a mentalidade estratégica e o foco no cliente. O texto que será postado nessa atividade colaborativa deve ser fruto da conversa entre gamer e oráculo. A primeira postagem relevante (com mais de 140 caracteres) conta pontos para o gamer. Participem!'
    ),
    new Activity(
      ++this.mockId,
      'Desafio 3.1 - Momento Oráculo - Transformação Digital e as Relações com o Cliente Interno',
      'Gestão Empresarial',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999),
      'Este é o primeiro momento de atuação do oráculo. Aqui, vocês deverão discutir sobre os principais pontos das videoaulas que fazem parte do desafio 1.1 e elencar de que forma eles podem se materializar na prática, considerando a mentalidade estratégica e o foco no cliente. O texto que será postado nessa atividade colaborativa deve ser fruto da conversa entre gamer e oráculo. A primeira postagem relevante (com mais de 140 caracteres) conta pontos para o gamer. Participem!'
    ),
    new Activity(
      ++this.mockId,
      'Desafio 3.4 - Youtubers BB - Atendimento Digital e as Relações com o Cliente Externo',
      'Gestão de Pessoas',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999),
      'Este é o primeiro momento de atuação do oráculo. Aqui, vocês deverão discutir sobre os principais pontos das videoaulas que fazem parte do desafio 1.1 e elencar de que forma eles podem se materializar na prática, considerando a mentalidade estratégica e o foco no cliente. O texto que será postado nessa atividade colaborativa deve ser fruto da conversa entre gamer e oráculo. A primeira postagem relevante (com mais de 140 caracteres) conta pontos para o gamer. Participem!'
    ),
    new Activity(
      ++this.mockId,
      'Desafio 2.2: Atividade colaborativa Transformação Digital e o BB',
      'Gestão de Pessoas',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999),
      'Este é o primeiro momento de atuação do oráculo. Aqui, vocês deverão discutir sobre os principais pontos das videoaulas que fazem parte do desafio 1.1 e elencar de que forma eles podem se materializar na prática, considerando a mentalidade estratégica e o foco no cliente. O texto que será postado nessa atividade colaborativa deve ser fruto da conversa entre gamer e oráculo. A primeira postagem relevante (com mais de 140 caracteres) conta pontos para o gamer. Participem!'
    ),
    new Activity(
      ++this.mockId,
      'Desafio 1.2 Momento Oráculo - Cursos',
      'Gestão de T.I',
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999),
      'Este é o primeiro momento de atuação do oráculo. Aqui, vocês deverão discutir sobre os principais pontos das videoaulas que fazem parte do desafio 1.1 e elencar de que forma eles podem se materializar na prática, considerando a mentalidade estratégica e o foco no cliente. O texto que será postado nessa atividade colaborativa deve ser fruto da conversa entre gamer e oráculo. A primeira postagem relevante (com mais de 140 caracteres) conta pontos para o gamer. Participem!'
    )
  ];
  comments: Comments[] = [
    new Comments(
      ++this.mockId,
      'Isabel Cristina Leopoldina Augusta Micaela Gabriela Rafaela Gonzaga de Bourbon e Bragança',
      `https://picsum.photos/id/${++this.mockId}/900/500`,
      'Missão Saiba Mais Game DesEnvolVer Transformação Digital',
      'Gestão Empresarial',
      this.randomDate(new Date(2013, 0, 1), new Date()),
      Math.floor(Math.random() * 5)
    ),
    new Comments(
      ++this.mockId,
      'Pedro de Alcântara João Carlos Leopoldo Salvador',
      `https://picsum.photos/id/${++this.mockId}/900/500`,
      'Missão Saiba Mais Game DesEnvolVer Transformação Digital',
      'Gestão T.I',
      this.randomDate(new Date(2013, 0, 1), new Date()),
      Math.floor(Math.random() * 5)
    ),
    new Comments(
      ++this.mockId,
      'Luís Filipe Maria Fernando Gastão',
      `https://picsum.photos/id/${++this.mockId}/900/500`,
      'Missão Saiba Mais Game DesEnvolVer Transformação Digital',
      'Gestão Empresarial',
      this.randomDate(new Date(2013, 0, 1), new Date()),
      Math.floor(Math.random() * 5)
    ),
    new Comments(
      ++this.mockId,
      'José Antonio Dias Toffoli',
      `https://picsum.photos/id/${++this.mockId}/900/500`,
      'Missão Saiba Mais Game DesEnvolVer Transformação Digital',
      'Gestão de Propina',
      this.randomDate(new Date(2013, 0, 1), new Date()),
      Math.floor(Math.random() * 5)
    ),
    new Comments(
      ++this.mockId,
      'Maria Antónia Gabriela de Koháry de Čabraď e Szitnya',
      `https://picsum.photos/id/${++this.mockId}/900/500`,
      'Missão Saiba Mais Game DesEnvolVer Transformação Digital',
      'Gestão de T.I',
      this.randomDate(new Date(2013, 0, 1), new Date()),
      Math.floor(Math.random() * 5)
    )
  ];
  activityFilters: FilterConfig[] = [
    new FilterConfig(
      ++this.mockId,
      'input',
      'Buscar por: título',
      'title'
    ),
    new FilterConfig(
      ++this.mockId,
      'select',
      'Conhecimento',
      'knowledge',
      null,
      null,
      [
        new FilterOptions(this.mockId++, 'Gestão de Pessoas', 'Gestão de Pessoas'),
        new FilterOptions(this.mockId++, 'Gestão de T.I', 'Gestão de T.I'),
        new FilterOptions(this.mockId++, 'Gestão Empresarial', 'Gestão Empresarial')
      ]
    ),
    new FilterConfig(
      ++this.mockId,
      'orderBy',
      'Ordenar por',
      'orderBy',
      null,
      null,
      [
        new FilterOptions(this.mockId++, 'Conhecimento', 'knowledge'),
        new FilterOptions(this.mockId++, 'Mais Comentários', 'comments'),
        new FilterOptions(this.mockId++, 'Mais Likes', 'likes')
      ]
    ),
    new FilterConfig(
      ++this.mockId,
      'checkbox',
      null,
      'allComments',
      'Todas que comentei',
      false
    )
  ];
  commentsFilters: FilterConfig[] = [
    new FilterConfig(
      ++this.mockId,
      'select',
      'Conhecimento',
      'knowledge',
      null,
      null,
      [
        new FilterOptions(this.mockId++, 'Gestão de Pessoas', 'Gestão de Pessoas'),
        new FilterOptions(this.mockId++, 'Gestão de T.I', 'Gestão de T.I'),
        new FilterOptions(this.mockId++, 'Gestão Empresarial', 'Gestão Empresarial')
      ]
    ),
    new FilterConfig(
      ++this.mockId,
      'orderBy',
      'Ordenar por',
      null,
      null,
      null,
      [
        new FilterOptions(this.mockId++, 'Conhecimento', 'knowledge'),
        new FilterOptions(this.mockId++, 'Título', 'title'),
        new FilterOptions(this.mockId++, 'Mais Relevante', 'relevance')
      ]
    )
  ];

  activityPage: number = 1;
  totalActivitiesPerPage: number = 2;
  commentsPage: number = 1;
  totalCommentsPerPage: number = 2;
  constructor(private router: Router) { super(); }
  randomDate(start, end) {
    return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).fromNow();
  }

  ngOnInit() {
    this.getKnowledgesByPage(this.knowledgePage);
    this.getCommentsByPage(this.commentsPage, this.totalCommentsPerPage);
    this.getActivityByPage(this.activityPage, this.totalActivitiesPerPage);
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
      new GeneralTableProps(this.mockId++, 'title', 'string', '', '', true),
      new GeneralTableProps(this.mockId++, 'knowledge', 'string', '', '', false),
      new GeneralTableProps(this.mockId++, 'comments', 'string', '', '', false),
      new GeneralTableProps(this.mockId++, 'likes', 'string', '', '', false),
      new GeneralTableProps(this.mockId++, '', 'link', '', 'acessar', false)
    ];
    this.activityConfig.itemsPerPage = itemsPerPage;
    this.activityConfig.totalItems = this.activities.length;
    this.activityConfig.items = this.paginateArray(page, itemsPerPage, this.activities);
    this.activityConfig.page = page;
    this.activityConfig.itemsPerPageList = [2, 4, 6];
  }
  filter(filter) {
    console.log(filter);
  }
  getCommentsByPage(page, itemsPerPage) {
    this.commentsConfig.columns = ['Enviado por', 'título', 'conhecimento', 'comentado', 'relevância', ''];
    this.commentsConfig.props = [
      new GeneralTableProps(this.mockId++, 'author', 'image', '', '', true),
      new GeneralTableProps(this.mockId++, 'activityName', 'string', '', '', false),
      new GeneralTableProps(this.mockId++, 'knowledge', 'string', '', '', false),
      new GeneralTableProps(this.mockId++, 'createdAt', 'string', '', '', false),
      new GeneralTableProps(this.mockId++, 'relevance', 'rating', '', '', false),
      new GeneralTableProps(this.mockId++, '', 'link', '', 'acessar', false)
    ];
    for (let index = this.comments.length - 1; index >= 0; index--) {
      let element = this.comments[index];
      element['url'] = element.senderUrl;
      this.comments[index] = element;
    }
    this.commentsConfig.itemsPerPage = itemsPerPage;
    this.commentsConfig.totalItems = this.comments.length;
    this.commentsConfig.items = this.paginateArray(page, itemsPerPage, this.comments);
    this.commentsConfig.page = page;
    this.commentsConfig.itemsPerPageList = [2, 4, 6];
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
  onClickLink(item, route) {
    this.router.navigate([`/${route}`], { state: { data: item } })
  }
}
