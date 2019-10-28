
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'mcinerney-dev-youtube-player',
  templateUrl: './youtube-player.html',
  styleUrls: ['./youtube-player.scss']
})
export class YoutubePlayerComponent {
  @Input()
  videoId: string;

  @Output() youtubeReady = new EventEmitter();
  @Output() youtubeUnstarted = new EventEmitter();
  @Output() youtubeEnded = new EventEmitter();
  @Output() youtubePlaying = new EventEmitter();
  @Output() youtubePaused = new EventEmitter();
  @Output() youtubeBuffering = new EventEmitter();
  @Output() youtubeCued = new EventEmitter();

  constructor() {}

  playerReady($event) {
    this.youtubeReady.emit($event);
  }

  playerUnstarted($event) {
    this.youtubeUnstarted.emit($event);
  }

  playerEnded($event) {
    this.youtubeEnded.emit($event);
  }

  playerPlaying($event) {
    this.youtubePlaying.emit($event);
  }

  playerPaused($event) {
    this.youtubePaused.emit($event);
  }

  playerBuffering($event) {
    this.youtubeBuffering.emit($event);
  }

  playerCued($event) {
    this.youtubeCued.emit($event);
  }

}
