import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { SharedModule } from '../_shared/shared.module';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ComponentsModule
  ],
  providers: []
})
export class ViewsModule {
}