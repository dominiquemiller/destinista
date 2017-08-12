import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-inventory',
    templateUrl: 'inventory.component.html'
})

export class InventoryComponent implements OnInit {
    @Input()
    item;

    constructor() { }

    ngOnInit() { }
}