import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import _ from 'lodash';
import { AppComponent } from '../../app.component';
import { FilterConfig, FilterOptions } from '../../_components/filter/filter.component';
import { Comments } from '../../_models/comments.model';
import { Activity } from '../../_models/activity.model';
import { Router } from '@angular/router';
import { SkeletonLoadingConfig } from 'src/app/_components/skeletonloading/skeletonloading.component';
@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent extends AppComponent implements OnInit {
  mockId: number = Math.floor(Math.random());
  activity: Activity = new Activity();
  commentsFilters: FilterConfig[] = [
    new FilterConfig(
      ++this.mockId,
      'select',
      'Filtrar por:',
      'filterBy',
      null,
      null,
      [
        new FilterOptions(this.mockId++, 'Todos', 'todos'),
        new FilterOptions(this.mockId++, 'Meus comentários', 'Meus comentários')
      ]
    ),
    new FilterConfig(
      ++this.mockId,
      'daterange'
    ),
  ];
  comments: Comments[] = [
    new Comments(
      this.mockId++,
      'Pedro de Alcântara João Carlos Leopoldo Salvador',
      `assets/images/persona1.jpg`,
      'Como gerenciar com scrum',
      'Gestão de T.I',
      this.randomDate(new Date(2019, 0, 1), new Date()),
      Math.floor(Math.random() * 5),
      [
        new Comments(
          ++this.mockId,
          'Pedro de Alcântara João Carlos Leopoldo Salvador',
          `assets/images/persona2.jpg`,
          'Como gerencicar com SCRUM',
          'Gestão de T.I',
          this.randomDate(new Date(2019, 0, 1), new Date()),
          Math.floor(Math.random() * 5),
          [],
          false,
          'O Banco do Brasil uma empresa com tradição no mercado financeiro, nesse momento de profundas mudanças no mundo vem oferecer aos seus clientes esse espaço com tecnologia de ponta, mesmo porque não é uma questão somente de lançar novidades no mercado e sim de sobrevivência. Porque se sabe que o mercado a cada dia oferece mais e mais ferramentas digitais, de modo que o cliente é atraído por essas facilidades. O cliente de hoje quer ganhar tempo, quer poder resolver seus problemas bancários de onde ele estiver e por isso se o Banco não se situar nesse mundo em busca de oferecer um diferencial com certeza irá terminar perdendo clientela. Devido a isso os funcionários a cada dia devem se situar com essa nova linguagem e com isso poder oferecer aos nossos clientes essas vastas opções do mundo digital.'
        )
      ],
      true,
      'O Banco do Brasil uma empresa com tradição no mercado financeiro, nesse momento de profundas mudanças no mundo vem oferecer aos seus clientes esse espaço com tecnologia de ponta, mesmo porque não é uma questão somente de lançar novidades no mercado e sim de sobrevivência. Porque se sabe que o mercado a cada dia oferece mais e mais ferramentas digitais, de modo que o cliente é atraído por essas facilidades. O cliente de hoje quer ganhar tempo, quer poder resolver seus problemas bancários de onde ele estiver e por isso se o Banco não se situar nesse mundo em busca de oferecer um diferencial com certeza irá terminar perdendo clientela. Devido a isso os funcionários a cada dia devem se situar com essa nova linguagem e com isso poder oferecer aos nossos clientes essas vastas opções do mundo digital.'
    )
  ];
  loading: boolean = true;
  skeletonTemplate: string = `
    <div class="background-masker image"></div>
    <div class="background-masker title"></div>
    <div class="background-masker subtitle"></div>
    <div class="background-masker label"></div>
    <div class="background-masker checkbox"></div>
    <div class="background-masker text-1"></div>
    <div class="background-masker text-2"></div>
    <div class="background-masker text-3"></div>
    <div class="background-masker text-4"></div>
    <div class="background-masker footer-1"></div>
    <div class="background-masker footer-2"></div>
  `;
  skeletonLoadingConfig: SkeletonLoadingConfig = new SkeletonLoadingConfig(true, this.skeletonTemplate);
  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    if (!history.state.data) this.router.navigate(['/']);
    else this.activity = history.state.data;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  changeDatepickerValue(event) {
    console.log(event)
  }
  randomDate(start, end) {
    return moment(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).fromNow();
  }
}
