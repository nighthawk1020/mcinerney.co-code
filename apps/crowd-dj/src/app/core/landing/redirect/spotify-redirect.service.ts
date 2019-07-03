import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyRedirectService {
  constructor(private http: HttpClient) {}

  redirect() {
    this.http.get('/crowd-dj/spotify/redirect')
            .subscribe((data) => {
              console.log(data);
            })
  }
}