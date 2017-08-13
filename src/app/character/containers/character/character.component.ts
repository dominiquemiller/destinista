import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamerTagService } from '../../../services/gamer-tag/gamer-tag.service';


@Component({
    selector: 'app-character',
    template: `
      <app-char-nav (logout)="logout($event)"></app-char-nav>
      <router-outlet></router-outlet>
    `
})

export class CharacterComponent implements OnInit {
    constructor( private authService: GamerTagService,
                 private router: Router
               ) { }

    ngOnInit() { }

    logout(event) {
      this.authService.delete();
      this.router.navigate(['/']);
    }
}