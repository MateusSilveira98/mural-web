import { Component, OnInit, Input, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'generaltable',
  templateUrl: './generaltable.component.html',
  styleUrls: ['./generaltable.component.scss']
})
export class GeneralTableComponent implements OnInit {
  @Input() config: GeneralTableConfig = new GeneralTableConfig();
  @Input() style: Object;
  @Input() isMobile: boolean = false;
  @Output() onChangePage = new EventEmitter();
  @Output() onChangeItemsPerPage = new EventEmitter();
  @Output() onClickHTMLPropTable = new EventEmitter();
  @Output() onClickRatingPropTable = new EventEmitter();
  @Output() onClickLinkPropTable = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const config: SimpleChange = changes.config;
    this.config = config.currentValue;
  }
  changePage(page) {
    this.onChangePage.emit(page);
  }
}

export class GeneralTableConfig {
  columns: string[] = [];
  props: GeneralTableProps[] = [];
  items: any[] = [];
  itemsPerPage: number = 10;
  itemsPerPageList: number[] = [5, 10, 20];
  page: number = 1;
  totalItems: number = 0;
  boolValuePropTrue: string = 'sim';
  boolValuePropFalse: string = 'não';
  emptyMessage: string = '';
  constructor(
    columns: string[] = null,
    props: GeneralTableProps[] = null,
    items: any[] = null,
    itemsPerPage: number = null,
    itemsPerPageList: number[] = [5, 10, 20],
    page: number = 1,
    totalItems: number = 0,
    boolValuePropTrue: string = 'sim',
    boolValuePropFalse: string = 'não',
    emptyMessage: string = 'Nenhum Registro'
  ) {
    this.columns = columns;
    this.props = props;
    this.items = items;
    this.itemsPerPage = itemsPerPage;
    this.itemsPerPageList = itemsPerPageList;
    this.page = page;
    this.totalItems = totalItems;
    this.boolValuePropTrue = boolValuePropTrue;
    this.boolValuePropFalse = boolValuePropFalse;
    this.emptyMessage = emptyMessage;
  }
}
export class GeneralTableProps {
  id: number = 0;
  name: string = '';
  type: string = '';
  attribute: string = '';
  label: string = '';
  bold: boolean = false;
  constructor(id: number = null, name: string = null, type: string = null, attribute: string = null, label: string = null, bold: boolean = false) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.attribute = attribute;
    this.bold = bold;
    this.label = label;
  }
}