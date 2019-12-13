import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'cardcarousel',
  templateUrl: './cardcarousel.component.html',
  styleUrls: ['./cardcarousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Input() page: number;
  @Input() style: Object;
  @Input() isMobile: boolean;
  @Output() onClickIndicator = new EventEmitter();
  @Output() onClickNext = new EventEmitter();
  @Output() onClickPrev = new EventEmitter();
  @Output() onClickCard = new EventEmitter();
  @ViewChild('carousel', { static: false }) carousel: NgbCarousel;
  slides: any[] = [];
  indicators: any[] = [];
  mobileCarouselCount: number = 1;
  constructor() { }
  ngOnInit() {
    this.indicators = new Array(Math.round(this.totalItems / this.itemsPerPage));
  }
  ngOnChanges(changes: SimpleChanges) {
    const items: SimpleChange = changes.items;
    const page: SimpleChange = changes.page;
    const totalItems: SimpleChange = changes.totalItems;
    this.items = items ? items.currentValue : [];
    this.totalItems = totalItems ? totalItems.currentValue : this.totalItems;
    this.page = +page.currentValue;
    this.paginateItems();
  }
  moveNext() {
    if (!this.isMobile) {
      if (+this.page !== +this.indicators.length)
        this.onClickNext.emit(this.page + 1);
    } else {
      ++this.mobileCarouselCount;
      if (this.mobileCarouselCount !== this.totalItems && this.mobileCarouselCount === this.items.length)
        this.onClickNext.emit(this.page + 1);
      else this.carousel.next();
    }
  }
  getPrev() {
    if (!this.isMobile) {
      if (this.page !== 1)
        this.onClickPrev.emit(this.page - 1);
    } else {
      this.carousel.prev();
    }
  }
  goToSlide(indicator) {
    this.onClickIndicator.emit(indicator)
  }
  paginateItems() {
    let j = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (i % this.itemsPerPage == 0) {
        j++;
        this.slides[j] = [];
        this.slides[j].push(this.items[i]);
      }
      else {
        this.slides[j].push(this.items[i]);
      }
    }
  }

}
