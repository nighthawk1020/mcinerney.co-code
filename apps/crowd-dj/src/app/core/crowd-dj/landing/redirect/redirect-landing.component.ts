import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mcinerney-redirect-landing',
  templateUrl: './redirect-landing.html',
  styleUrls: ['./redirect-landing.scss']
})
export class RedirectLandingComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.queryParamMap);
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });
  }

}
