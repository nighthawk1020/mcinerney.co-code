import { Component } from "@angular/core";

@Component(
  {
    selector: 'mcinerney-clicker-landing',
    templateUrl: './clicker-landing.html',
    styleUrls: ['./clicker-landing.scss']
  }
)
export class ClickerLandingComponent {
  isDisabled: boolean;
  constructor() {
    this.isDisabled = true;
  }
}