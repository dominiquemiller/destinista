import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-activity-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['activity-stats.component.scss'],
    templateUrl: 'activity-stats.component.html'
})

export class ActivityStatsComponent implements OnInit {
    @Input()
    activityStats;

    constructor() { }

    ngOnInit() {
        console.log(this.activityStats)
     }
}