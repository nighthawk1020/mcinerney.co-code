import { SpotifyLandingComponent } from "./spotify/spotify-landing.component";
import { CrowdDjLandingComponent } from './crowd-dj-landing.component';
import { YoutubePlayerComponent } from './youtube/youtube-player.component';
import { SongSearchComponent } from './song-search/song-search.component';
import { CrowdDjLoginComponent } from './login/crowd-dj-login.component';

export const CROWD_DJ_COMPONENTS = [
  CrowdDjLandingComponent,
  CrowdDjLoginComponent,
  SongSearchComponent,
  SpotifyLandingComponent,
  YoutubePlayerComponent
]