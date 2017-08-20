import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-historical-stat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['historical-stat.component.scss'],
    template: `<p>{{ activity | json }}</p>`
})

export class HistoricalStatComponent implements OnInit {
    @Input()
    activity;
    constructor() { }

    ngOnInit() {}

}