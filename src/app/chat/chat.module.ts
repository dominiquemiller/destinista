import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { ChatComponent } from './containers/chat.component';

const ROUTES: Routes = [
  { path: '', component: ChatComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [],
    declarations: [
        ChatComponent
    ],
    providers: [],
})
export class ChatModule { }
