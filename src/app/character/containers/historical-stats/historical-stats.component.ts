import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HistoricalStats } from '../../models/historical-stats.interface';
import { BungieApi } from '../../../models/bungie.api.interface';
@Component({
    selector: 'app-historical-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['historical-stats.component.scss'],
    templateUrl: 'historical-stats.component.html'
})

export class HistoricalStatsComponent implements OnInit {
    stats: HistoricalStats;
    statForm: FormGroup;
    statTypes: Array<string>;
    selectedType: string;

    constructor( private route: ActivatedRoute, private fb: FormBuilder ) {
        this.createForm();
     }

    ngOnInit() {
        this.route.data.subscribe( (data: { historicalStats: BungieApi }) => {
            this.stats = data.historicalStats.Response;
        });

        this.statTypes = Object.keys(this.stats);

        this.statForm.get('activityType').valueChanges.subscribe( (value) => this.selectedType = value );
     }

     createForm() {
        this.statForm =  this.fb.group({
             activityType: ''
        });
     }

}
