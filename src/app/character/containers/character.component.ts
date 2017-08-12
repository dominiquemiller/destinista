import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character',
    styleUrls: ['character.component.scss'],
    templateUrl: 'character.component.html'
})

export class CharacterComponent implements OnInit {
    inventory;
    activityStats;
    historicalStats;

    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.inventory = data.items;
            this.activityStats = data.activityStats;
            this.historicalStats = data.historicalStats;
        });
     }
}