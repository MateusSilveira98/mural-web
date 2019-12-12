import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { CardCarouselComponent } from './cardcarousel/cardcarousel.component';
import { CommentCardComponent } from './commentcard/commentcard.component';
@NgModule({
  declarations: [
    CardCarouselComponent,
    CommentCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  exports: [
    CardCarouselComponent,
    CommentCardComponent
  ],
  providers: [
  ]
})
export class SharedModule { }