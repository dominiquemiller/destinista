import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { ChatService } from '../services/chat.service';
import { Gamer } from '../../models/gamer.interface';
import { GamerTagService } from '../../services/gamer-tag/gamer-tag.service';

@Component({
    selector: 'app-chat',
    templateUrl: 'chat.component.html'
})

export class ChatComponent implements OnInit {
    chatForm: FormGroup;
    messages = [];
    control: AbstractControl;

    private gamerInfo;

    constructor( private chat: ChatService,
                 private fb: FormBuilder,
                 private gamer: GamerTagService ) {
                     this.createForm();
                 }

    ngOnInit() {
        this.chat.getMessage().subscribe( (msg) => {
            this.messages.push(msg);
         });

         this.gamerInfo = this.gamer.get();
         this.control = this.chatForm.get('body');
     }

    sendMsg(value, valid) {
       if (valid) {
          const message = {
              author: this.gamerInfo.tag,
              body: value.body
          };
          this.chat.sendMessage(message);
       }
    }

    createForm() {
        this.chatForm =  this.fb.group({
             body: [ '', Validators.required ]
        });
     }

}
