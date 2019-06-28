import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularLandingComponent } from '../core/landing/angular-landing.component';

const routes: Routes = [
    {
        path: '',
        component: AngularLandingComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
