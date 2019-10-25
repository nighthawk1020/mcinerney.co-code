import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mcinerney-dev-spotify',
  templateUrl: './spotify-landing.html'
})
export class SpotifyLandingComponent {
  private room: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.room = this.activatedRoute.snapshot.queryParamMap.get('room');
  }
}
