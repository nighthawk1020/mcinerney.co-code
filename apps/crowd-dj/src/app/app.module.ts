import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrowdDjCoreModule } from './core/crowd-dj/crowd-dj-core.module';
import { CrowdDjRoutingModule } from './routing/crowd-dj-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CrowdDjCoreModule,
    CrowdDjRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
