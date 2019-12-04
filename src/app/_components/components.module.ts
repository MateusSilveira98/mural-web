import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GeneralTableComponent } from './generaltable/generaltable.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    GeneralTableComponent,
    CarouselComponent,
    FilterComponent
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
    FilterComponent
  ],
  providers: []
})
export class ComponentsModule { }