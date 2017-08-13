import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActivityStats } from '../../models/activity-stats.interface';


@Component({
    selector: 'app-activity-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['activity-stats.component.scss'],
    templateUrl: 'activity-stats.component.html'
})

export class ActivityStatsComponent implements OnInit {
    stats: ActivityStats;

    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.stats = data.activityStats;
            console.log(this.stats);
        });
     }
}
