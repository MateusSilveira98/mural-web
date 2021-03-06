import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ActivityComponent } from './views/activity/activity.component';
import { KnowledgeComponent } from './views/knowledge/knowledge.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atividade', component: ActivityComponent },
  { path: 'conhecimento', component: KnowledgeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
