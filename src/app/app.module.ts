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
registerLocaleData(localePtBr, 'pt')

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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