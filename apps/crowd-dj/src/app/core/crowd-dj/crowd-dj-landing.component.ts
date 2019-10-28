import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mcinerney-dev-crowd-dj-landing',
  templateUrl: './crowd-dj-landing.html',
  styleUrls: ['./crowd-dj-landing.scss']
})
export class CrowdDjLandingComponent {
  youtubeVideoId: string;
  
  private room: string;
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.room = this.activatedRoute.snapshot.queryParamMap.get('room');
    this.actByRouteType(this.activatedRoute.snapshot.queryParamMap.get('type'));
  }

  private actByRouteType(type: string) {
    
  }  

  selectedYoutubeVideo($event:string) {
    this.youtubeVideoId = $event;
  }

}
