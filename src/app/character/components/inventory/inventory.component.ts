import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-inventory',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'inventory.component.html'
})

export class InventoryComponent implements OnInit {
    @Input()
    item;

    constructor() { }

    ngOnInit() { }
}