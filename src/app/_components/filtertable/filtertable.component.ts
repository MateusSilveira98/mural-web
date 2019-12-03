import { Component, OnInit, Input, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filtertable',
  templateUrl: './filtertable.component.html',
  styleUrls: ['./filtertable.component.scss']
})
export class FiltertableComponent implements OnInit {
  @Input() config: FilterTableConfig = new FilterTableConfig();
  @Input() isFilter: boolean = false;
  @Input() filters: FilterConfigProps[] = [];
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

export class FilterTableConfig {
  columns: string[] = [];
  props: Props[] = [];
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
    props: Props[] = null,
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
export class Props {
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

export class FilterConfigProps {
  id: number;
  value: any;
  label: string;
  type: string;
  placeholder: string;
  options: FilterOptions[];
  constructor(
    id: number = null,
    type: string = null,
    placeholder: string = null,
    label: string = null,
    value: any = null,
    options: FilterOptions[] = null,
  ) {
    this.id = id;
    this.value = value;
    this.label = label;
    this.type = type;
    this.placeholder = placeholder;
    this.options = options;
  }
}
export class FilterOptions {
  id: number;
  valueLabel: string;
  value: any;
  constructor(
    id: number = null,
    valueLabel: string = null,
    value: any = null
  ) {
    this.id = id;
    this.valueLabel = valueLabel;
    this.value = value;
  }
}