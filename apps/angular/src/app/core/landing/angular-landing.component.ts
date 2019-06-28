import { Component } from '@angular/core';

@Component({
  selector: 'my-homepage-angular',
  templateUrl: './angular-landing.html',
  styleUrls: ['./angular-landing.scss']
})
export class AngularLandingComponent {
  constructor() {}

  onClick() {
    window.alert('BUSTED');
  }
}
