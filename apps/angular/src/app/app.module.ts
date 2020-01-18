import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AngularLandingModule } from './core/landing/angular-landing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularLandingModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
