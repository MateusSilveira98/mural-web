import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewsModule } from './views/views.module';

import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import localeExtraPtBr from '@angular/common/locales/extra/pt';
registerLocaleData(localePtBr, 'pt', localeExtraPtBr)
import 'moment/locale/pt-br';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}