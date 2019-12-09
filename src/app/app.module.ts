import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './_components/components.module';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import localeExtraPtBr from '@angular/common/locales/extra/pt';
registerLocaleData(localePtBr, 'pt', localeExtraPtBr)
import 'moment/locale/pt-br';

import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(apollo: Apollo, httpLink: HttpLink) {
  //   apollo.create({
  //     link: httpLink.create({ uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql' }),
  //     cache: new InMemoryCache()
  //   })
  // }
}