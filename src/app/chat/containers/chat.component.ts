import {Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit {
    private message = {
        author: 'tutorialedge',
        message: 'this is a test message'
    }

    constructor( private chat: ChatService ) {
        chat.messages.subscribe( (msg) => {
            console.log(`Response from websocket: ${JSON.stringify(msg)}`);
         });
    }

    ngOnInit() {
     }

    sendMsg() {
        console.log(`new message from client to websocket: ${this.message} `);
        this.chat.messages.next(this.message);
        this.message.message = '';
    }
}
