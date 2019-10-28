import { NgModule } from "@angular/core";
import { YTPlayerModule } from 'angular-youtube-player';

import { CrowdDjCommonModule } from '../../../common/crowd-dj-common.module';
import { YOUTUBE_COMPONENTS } from './youtube-components';

@NgModule({
  declarations: [
    ...YOUTUBE_COMPONENTS
  ],
  entryComponents: [
    ...YOUTUBE_COMPONENTS
  ],
  imports: [
    CrowdDjCommonModule,
    YTPlayerModule
  ],
  providers: []
})
export class McinerneyYoutubeModule { };