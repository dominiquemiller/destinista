import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character',
    styleUrls: ['character.component.scss'],
    templateUrl: 'character.component.html'
})

export class CharacterComponent implements OnInit {
    inventory;
    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.inventory = data.items;
            console.log(data);
        });
     }
}