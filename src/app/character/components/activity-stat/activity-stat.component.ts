import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-activity-stat',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['activity-stat.component.scss'],
    template: `<p>{{ activity | json }}</p>`
})

export class ActivityStatComponent implements OnInit {
    @Input()
    activity;
    constructor() { }

    ngOnInit() {}

}