import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CrowdDjCoreModule } from './core/crowd-dj/crowd-dj-core.module';
import { CrowdDjRoutingModule } from './routing/crowd-dj-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    CrowdDjCoreModule,
    CrowdDjRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
