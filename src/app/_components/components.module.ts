import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralTableComponent } from './generaltable/generaltable.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './filter/filter.component';
import { CommentcardComponent } from './commentcard/commentcard.component';

@NgModule({
  declarations: [
    GeneralTableComponent,
    CarouselComponent,
    FilterComponent,
    CommentcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GeneralTableComponent,
    CarouselComponent,
    FilterComponent,
    CommentcardComponent
  ],
  providers: []
})
export class ComponentsModule { }