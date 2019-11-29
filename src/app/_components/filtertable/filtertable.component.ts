import { Component, OnInit, Input, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filtertable',
  templateUrl: './filtertable.component.html',
  styleUrls: ['./filtertable.component.scss']
})
export class FiltertableComponent implements OnInit {
  @Input() config: FilterTableConfig = new FilterTableConfig();
  @Input() style: Object;
  @Input() isMobile: boolean = false;
  @Output() onChangePage = new EventEmitter();
  @Output() onChangeItemsPerPage = new EventEmitter();
  @Output() onClickAction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const config: SimpleChange = changes.config;
    this.config = config.currentValue;
    console.log(this.config)
  }
  changePage(page) {
    this.onChangePage.emit(page);
  }
}

export class FilterTableConfig {
  constructor() { }
  columns: string[] = [];
  props: Props[] = [];
  items: any[] = [];
  itemsPerPage: number = 10;
  itemsPerPageList: number[];
  page: number = 1;
  totalItems: number = 0;
  boolValuePropTrue: string = 'sim';
  boolValuePropFalse: string = 'não';
  emptyMessage: string = '';
}
class Props {
  id: number = 0;
  name: string = '';
  type: string = '';
  attribute: string = '';
  html: string = '';
  bold: boolean = false;
}

