import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GamerTagService } from './services/gamer-tag/gamer-tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Destinista!';

  constructor( private router: Router, private gamerTag: GamerTagService ) {};

  ngOnInit() {
     if ( this.gamerTag.get() ) {
          const gamer = this.gamerTag.get();
          this.router.navigateByUrl(`menu/${gamer.network}/${gamer.membershipId}`);
     } else {
          this.router.navigateByUrl('sign-in');
     }
  }

}
