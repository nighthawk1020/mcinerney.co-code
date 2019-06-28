import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrowdDjLandingComponent } from '../core/landing/crowd-dj-landing.component';

const routes: Routes = [
    {
        path: '',
        component: CrowdDjLandingComponent,
    },
    {
        path: 'spotifyLogin',
        resolve: {
            url: ''
        }
    }
];

@NgModule({
    declarations: [
        CrowdDjLandingComponent
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    entryComponents: [
        CrowdDjLandingComponent
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
