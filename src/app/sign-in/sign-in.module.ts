import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GamerInfoComponent } from './components/gamer-info/gamer-info.component';
import { SignInComponent } from './containers/sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
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
