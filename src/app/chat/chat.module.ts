import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
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
