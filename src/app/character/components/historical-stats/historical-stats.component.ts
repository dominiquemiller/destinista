import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-historical-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['historical-stats.component.scss'],
    templateUrl: 'historical-stats.component.html'
})

export class HistoricalStatsComponent implements OnInit {
    @Input()
    historicalStats;

    constructor() { }

    ngOnInit() {
        console.log(this.historicalStats)
     }
}