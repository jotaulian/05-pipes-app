import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Locale configuration
import localeEsAr from '@angular/common/locales/es-AR';
import localeFrCa from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEsAr);
registerLocaleData(localeFrCa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
