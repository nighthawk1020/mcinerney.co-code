import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickerRoutingModule } from './router.module';
import { ClickerClientComponent } from './clicker-client/clicker-client.component';
import { ClickerLandingComponent } from './clicker-landing/clicker-landing.component';
import { OwnerClientComponent } from './owner-client/owner-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerClientComponent,
    ClickerLandingComponent,
    OwnerClientComponent
  ],
  imports: [
    BrowserModule,
    ClickerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
