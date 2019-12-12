import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { GeneralTableComponent } from './generaltable/generaltable.component';
import { FilterComponent } from './filter/filter.component';
import { I18n, CustomDatepickerI18n } from '../_helpers/CustomDatepickerI18n';
import { NgbDatePTParserFormatter } from '../_helpers/NgbDatePTParserFormatter';
@NgModule({
  declarations: [
    GeneralTableComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GeneralTableComponent,
    FilterComponent
  ],
  providers: [
    [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
    [{ provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter }],
  ]
})
export class ComponentsModule { }