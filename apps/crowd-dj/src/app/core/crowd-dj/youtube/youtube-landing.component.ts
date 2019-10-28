
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YTPlayerService } from 'angular-youtube-player';
@Component({
  selector: 'mcinerney-dev-youtube',
  templateUrl: './youtube-landing.html'
})
export class YoutubeLandingComponent {
  private room: string;
  constructor(private activatedRoute: ActivatedRoute,
              private ytPlayerService: YTPlayerService) {
    this.room = this.activatedRoute.snapshot.queryParamMap.get('room');
  }
}
