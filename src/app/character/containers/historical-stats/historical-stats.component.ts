import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HistoricalStats } from '../../models/historical-stats.interface';

@Component({
    selector: 'app-historical-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['historical-stats.component.scss'],
    templateUrl: 'historical-stats.component.html'
})

export class HistoricalStatsComponent implements OnInit {
    stats: HistoricalStats;

    constructor( private route: ActivatedRoute ) { }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.stats = data.historicalStats.Response;
            console.log(this.stats);
        });
     }
}
