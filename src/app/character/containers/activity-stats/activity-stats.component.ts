import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivityStats } from '../../models/activity-stats.interface';


@Component({
    selector: 'app-activity-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['activity-stats.component.scss'],
    templateUrl: 'activity-stats.component.html'
})

export class ActivityStatsComponent implements OnInit {
    stats: ActivityStats;
    statForm: FormGroup;
    selectedActivity: string;

    constructor( private route: ActivatedRoute, private fb: FormBuilder ) { 
        this.createForm();
    }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.stats = data.activityStats;
        });

        this.statForm.get('activityType').valueChanges.subscribe( (value) => this.selectedActivity = value );
    }

    createForm() {
        this.statForm =  this.fb.group({
             activityType: ''
        });
     }
}
