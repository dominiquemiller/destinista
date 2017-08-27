import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { ChatComponent } from './containers/chat.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

// services
import { ChatService } from './services/chat.service';

const ROUTES: Routes = [
  { path: '', component: ChatComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        ChatComponent,
        ChatRoomComponent
    ],
    providers: [
        ChatService
    ],
})
export class ChatModule { }
