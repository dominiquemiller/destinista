import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// components
import { ChatComponent } from './containers/chat.component';

// services
import { ChatService } from './services/chat.service';

const ROUTES: Routes = [
  { path: 'chat', component: ChatComponent }
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
    providers: [
        ChatService
    ],
})
export class ChatModule { }
