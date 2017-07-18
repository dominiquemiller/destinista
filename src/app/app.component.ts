import { Component, OnInit } from '@angular/core';

import { GamerInfoService } from './services/gamer-info/gamer-info.service';
import { SpinnerService } from './easy-spinner/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Destinista!';

  constructor(private service: GamerInfoService,
              private spinner: SpinnerService
              ) {};

  ngOnInit() {}

  getGamer(gamer) {
    this.spinner.show();
    this.service.get(gamer).subscribe( data => {
      this.spinner.hide();
      console.log(data);
    }, error => console.log(error));
  }

}
