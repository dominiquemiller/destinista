import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { GamerTagService } from './services/gamer-tag/gamer-tag.service';
import { SpinnerService } from './easy-spinner/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Destinista!';

  constructor( private router: Router,
               private spinner: SpinnerService,
               private gamerTag: GamerTagService ) {};

  ngOnInit() {
     this.router.events.subscribe( event => {
       if (event instanceof NavigationStart ) {
         this.spinner.show();
       } else if (event instanceof NavigationEnd) {
         this.spinner.hide();
       }
     })
  }

}
