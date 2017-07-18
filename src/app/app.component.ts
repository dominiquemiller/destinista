import { Component, OnInit } from '@angular/core';

import { GamerInfoService } from './services/gamer-info/gamer-info.service';
import { GamerTagService } from './services/gamer-tag/gamer-tag.service';
import { SpinnerService } from './easy-spinner/services/spinner.service';

import { BungieApi } from './models/bungie.api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Destinista!';
  signInSuccess: boolean;

  constructor(private infoService: GamerInfoService,
              private tagService: GamerTagService,
              private spinner: SpinnerService
              ) {};

  ngOnInit() {}

  getGamer(gamer) {
    this.spinner.show();
    this.infoService.get(gamer).subscribe( (data: BungieApi) => {
      this.spinner.hide();
      this.signInSuccess = true;
      console.log(data);
      this.saveId(gamer, data.Response)
    }, error => {
      this.spinner.hide();
      console.log(error)
    });
  }

  saveId(gamer, id) {
     gamer = Object.assign({}, gamer, { membershipId: id });
     this.tagService.set(gamer);
  }

}
