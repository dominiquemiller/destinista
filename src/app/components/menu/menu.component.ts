import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BungieApi } from '../../models/bungie.api.interface';
import { CharClass } from '../../models/char-class.enum';

@Component({
    selector: 'app-menu',
    styleUrls: ['menu.component.scss'],
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    charClass;
    summary;
    characters;

    constructor(private route: ActivatedRoute ) {
        this.charClass = CharClass;
    }

    ngOnInit() {
        this.route.data.subscribe( (data: { summary: BungieApi }) => {
           this.summary = data.summary.Response.data;
           console.log(this.summary);
           this.characters = this.summary.characters;
        } )
    }

    decodeClass(value: number) {
        let classes: string [] = Object.keys(this.charClass);
        classes = classes.slice( classes.length / 2 );
        return classes[value];
    }
}
