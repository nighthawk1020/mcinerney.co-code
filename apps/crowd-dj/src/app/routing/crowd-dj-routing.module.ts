import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdDjLandingComponent } from '../core/crowd-dj/landing/crowd-dj-landing.component';
import { RedirectLandingComponent } from '../core/crowd-dj/landing/redirect/redirect-landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crowd-dj',
    pathMatch: 'full'
  },
  {
    path: 'crowd-dj',
    children: [
      {
        path: '',
        component: CrowdDjLandingComponent,
      },
      {
        path: 'landing',
        component: RedirectLandingComponent    
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class CrowdDjRoutingModule {}
