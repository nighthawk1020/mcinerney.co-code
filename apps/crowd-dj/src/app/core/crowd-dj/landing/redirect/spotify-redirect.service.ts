import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyRedirectService {
  constructor(private http: HttpClient,
              private router: Router) {}

  redirect() {
    this.http.get('/api/crowd-dj/spotify/redirect').subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        this.router.navigate(['crowd-dj/landing']);
      }
    });
  }
}