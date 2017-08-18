import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-historical-stat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['historical-stat.component.scss'],
    template: ``
})

export class HistoricalStatComponent implements OnInit, OnChanges {
    @Input()
    activity;
    constructor() { }

    ngOnInit() {}

    ngOnChanges(simpleChange) {
        console.log(simpleChange);
    }
}