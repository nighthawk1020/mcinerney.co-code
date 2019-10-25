
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mcinerney-dev-youtube',
  templateUrl: './youtube-landing.html'
})
export class YoutubeLandingComponent {
  private room: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.room = this.activatedRoute.snapshot.queryParamMap.get('room');
  }
}
