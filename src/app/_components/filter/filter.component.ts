import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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
  selectedFilters: any = {};
  date: any = {
    from: null,
    until: null,
    disabledFrom: { year: null, month: null, day: null },
    disabledUntil: { year: null, month: null, day: null }
  }
  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  ngOnInit() {
    this.fieldWidth = `calc(( ( ${this.filters.length <= 2 ? `(100% / ${this.filters.length}) / 2` : `(100% / ${this.filters.length}) * 2`} ) + 1%) - 1%)`;
  }
  clear() {
    this.filters = this.filters.map(item => {
      item.value = null;
      return item
    })
    this.selectedFilters = {};
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate {
    let parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
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