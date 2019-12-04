import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filters: FilterConfig[] = [];
  @Input() style: Object;
  @Input() isMobile: boolean = false;
  @Input() isSubmit: boolean = false;
  @Output() onFilter = new EventEmitter();
  fieldWidth: string;
  FilterTypes = FilterTypes;
  selectedFilters: any;
  constructor() { }

  ngOnInit() {
    this.fieldWidth = `calc(( ( ${this.filters.length <= 2 ? `(100% / ${this.filters.length}) / 2` : `(100% / ${this.filters.length}) * 2`} ) + 1%) - 1%)`;
  }
}

export class FilterConfig {
  id: number;
  value: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  options: FilterOptions[];
  constructor(
    id: number = null,
    type: string = null,
    placeholder: string = null,
    name: string = null,
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
    this.name = name;
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
export enum FilterTypes {
  input = 1,
  select = 2,
  orderBy = 3,
  checkbox = 4
}