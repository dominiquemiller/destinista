import { Component, OnInit } from '@angular/core';

import { ChatService } from '../services/chat.service';
import { Gamer } from '../../models/gamer.interface';
import { GamerTagService } from '../../services/gamer-tag/gamer-tag.service';
import { Message } from '../models/message.interface';
import { Network } from '../../models/network.enum';

@Component({
    selector: 'app-chat',
    templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit {
    messages: Message[] = [];
    network: string;
    private gamerInfo;

    constructor( private chat: ChatService,
                 private gamer: GamerTagService ) {}

    ngOnInit() {
        this.chat.getMessage().subscribe( (msg) => {
            this.messages = [...this.messages, msg];
         });

         this.gamerInfo = this.gamer.get();
         this.network = Network[this.gamerInfo.network];
     }

    sendMsg(value) {
        value = Object.assign({}, value, { author: this.gamerInfo.tag });
        this.chat.sendMessage(value);
    }

}
