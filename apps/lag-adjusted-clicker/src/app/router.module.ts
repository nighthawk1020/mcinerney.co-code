import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickerLandingComponent } from './clicker-landing/clicker-landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: ClickerLandingComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ClickerRoutingModule {}
