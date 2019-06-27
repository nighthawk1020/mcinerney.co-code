import { Routes } from 'nest-router';
import { ROUTE_PREFIX, CROWD_DJ_ROUTE } from './route-consts';
import { ApiModule } from '../core/api/api.module';
import { CrowdDjModule } from '../core/crowd-dj/crowd-dj.module';

export const routes: Routes = [
  {
    path: ROUTE_PREFIX,
    module: ApiModule,
    children: [
      {
        path: CROWD_DJ_ROUTE,
        module: CrowdDjModule
      }
    ]
  }
]