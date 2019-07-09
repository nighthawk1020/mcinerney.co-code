import { Component } from '@angular/core';
import { SpotifyRedirectService } from './redirect/spotify-redirect.service';

@Component({
  selector: 'my-homepage-crowd-dj',
  templateUrl: './crowd-dj-landing.html',
  styleUrls: ['./crowd-dj-landing.scss']
})
export class CrowdDjLandingComponent {
  constructor(private spotifyRedirect: SpotifyRedirectService) {}

  getSpotifyScreen() {
    this.spotifyRedirect.redirect();
  }
}
