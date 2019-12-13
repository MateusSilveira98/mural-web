import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { SharedModule } from '../_shared/shared.module';
import { ComponentsModule } from '../_components/components.module';
import { KnowledgeComponent } from './knowledge/knowledge.component';

@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    KnowledgeComponent
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