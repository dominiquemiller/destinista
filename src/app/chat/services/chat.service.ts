import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WebSocketService } from '../../services/websocket/websocket.service';

const CHAT_URL = 'ws://localhost:3000/chat-room';

export interface Message {
    author: string,
    message: string
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(socket: WebSocketService ) {
        this.messages = <Subject<Message>>
        socket.connect(CHAT_URL)
              .map((response): Message => {
                  const data = JSON.parse(response.data);
                  return {
                    author: data.author,
                    message: data.message
                  }
             });
    }
}
