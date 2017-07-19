import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-menu',
    styleUrls: ['menu.component.scss'],
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    constructor(private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.subscribe( data => console.log(data) )
     }
}