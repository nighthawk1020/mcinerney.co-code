import { NgModule } from "@angular/core";
import { SpotifyRedirectService } from './landing/redirect/spotify-redirect.service';
import { CrowdDjCommonModule } from '../common/crowd-dj-common.module';
import { CROWD_DJ_COMPONENTS } from './crowd-dj-core-components';

@NgModule(
  {
    declarations: [
      ...CROWD_DJ_COMPONENTS
    ],
    entryComponents: [
      ...CROWD_DJ_COMPONENTS
    ],
    imports: [
      CrowdDjCommonModule
    ],
    providers: [
      SpotifyRedirectService
    ]
  }
)
export class CrowdDjCoreModule { };