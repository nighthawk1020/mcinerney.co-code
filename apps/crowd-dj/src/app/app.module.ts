import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrowdDjCoreModule } from './core/crowd-dj/crowd-dj-core.module';
import { CrowdDjRoutingModule } from './routing/crowd-dj-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CrowdDjCoreModule,
    CrowdDjRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
