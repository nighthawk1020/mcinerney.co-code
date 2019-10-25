import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyLandingComponent } from '../core/crowd-dj/spotify/spotify-landing.component';
import { CrowdDjComponent } from '../core/crowd-dj/crowd-dj.component';
import { YoutubeLandingComponent } from '../core/crowd-dj/youtube/youtube-landing.component';

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
        component: CrowdDjComponent,
      },
      {
        path: 'spotify',
        component: SpotifyLandingComponent    
      },
      {
        path: 'youtube',
        component: YoutubeLandingComponent
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
