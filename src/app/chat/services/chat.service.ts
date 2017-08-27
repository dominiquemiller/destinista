import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Gamer } from '../../models/gamer.interface';
import { Network } from '../../models/network.enum';
import { GamerTagService } from '../../services/gamer-tag/gamer-tag.service';
import { API_URL } from '../../../environments/environment'

@Injectable()
export class ChatService {
  private url = API_URL;
  private io;
  private gamer: Gamer;

  constructor( private gamerService: GamerTagService ) {
    this.gamer = this.gamerService.get();
    this.io = io(this.url);
    this.io.emit('room', this.gamer);
  }

  sendMessage(message) {
    this.io.emit('chatText', message);
  }

  getMessage(): Observable <any> {
    return new Observable(observer => {
      this.io.on('chatText', (data) => {
        observer.next(data);
      });
    })
  }
}
