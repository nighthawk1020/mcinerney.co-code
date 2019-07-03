import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrowdDjCoreModule } from './core/crowd-dj-core.module';
import { RedirectLandingComponent } from './core/landing/redirect/redirect-landing.component';
import { CrowdDjLandingComponent } from './core/landing/crowd-dj-landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crowd-dj',
    pathMatch: 'full'
  },
  {
    path: 'crowd-dj',
    component: CrowdDjLandingComponent
  },
  {
    path: 'crowd-dj/landing',
    component: RedirectLandingComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CrowdDjCoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
