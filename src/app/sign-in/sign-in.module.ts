import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { GamerInfoComponent } from './components/gamer-info/gamer-info.component';
import { SignInComponent } from './containers/sign-in.component';

const ROUTES: Routes = [
    { path: 'sign-in', component: SignInComponent }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        SignInComponent
    ],
    declarations: [
        GamerInfoComponent,
        SignInComponent
    ],
    providers: [],
})
export class SignInModule { }
