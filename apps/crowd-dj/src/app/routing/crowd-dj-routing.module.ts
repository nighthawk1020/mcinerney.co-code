import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdDjLoginComponent } from '../core/crowd-dj/login/crowd-dj-login.component';
import { CrowdDjLandingComponent } from '../core/crowd-dj/crowd-dj-landing.component';

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
        component: CrowdDjLoginComponent,
      },
      {
        path: 'landing',
        component: CrowdDjLandingComponent
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
