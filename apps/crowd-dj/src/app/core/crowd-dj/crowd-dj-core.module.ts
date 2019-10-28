import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { YTPlayerModule } from 'angular-youtube-player';

import { CROWD_DJ_COMPONENTS } from './crowd-dj-core-components';
import { AngularMaterialModule } from '../../common/angular-material/angular-material.module';
import { CrowdDjCommonModule } from '../../common/crowd-dj-common.module';

@NgModule({
  declarations: [
    ...CROWD_DJ_COMPONENTS
  ],
  entryComponents: [
    ...CROWD_DJ_COMPONENTS
  ],
  imports: [
    AngularMaterialModule,
    CrowdDjCommonModule,
    RouterModule,
    YTPlayerModule
  ],
  providers: []
})
export class CrowdDjCoreModule { };