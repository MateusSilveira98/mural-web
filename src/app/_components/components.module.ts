import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FiltertableComponent } from './filtertable/filtertable.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    FiltertableComponent,
    CarouselComponent
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
    FiltertableComponent,
    CarouselComponent
  ],
  providers: []
})
export class ComponentsModule { }