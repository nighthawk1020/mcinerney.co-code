import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-homepage-crowd-dj',
  templateUrl: './crowd-dj-landing.html',
  styleUrls: ['./crowd-dj-landing.scss']
})
export class CrowdDjLandingComponent {
  constructor(private http: HttpClient) {}

  getSpotifyScreen() {
    this.http.get('https://accounts.spotify.com/authorize')
  }
}
