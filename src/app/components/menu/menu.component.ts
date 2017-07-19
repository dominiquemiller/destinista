import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BungieApi } from '../../models/bungie.api.interface';

@Component({
    selector: 'app-menu',
    styleUrls: ['menu.component.scss'],
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {
    banners: Array<string> = [];
    summary;

    constructor(private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.subscribe( (data: { summary: BungieApi }) => {
           this.summary = data.summary.Response.data;
           this.setupBanners(this.summary.characters);
        } )
    }

    setupBanners(chars: Array<string>) {
        chars.forEach( (item: any) => this.banners = [ ...this.banners, item.backgroundPath ])
    };
}