import { Component, OnInit } from '@angular/core';

import { GamerInfoService } from './services/gamer-info/gamer-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Destinista!';

  constructor(private service: GamerInfoService ) {};

  ngOnInit() {}

  getGamer(gamer) {
    this.service.get(gamer).subscribe( data => console.log(data), error => console.log(error));
  }

}
