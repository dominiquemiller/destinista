import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CharacterService } from './character.service';
import { GamerTagService } from '../../services/gamer-tag/gamer-tag.service';
import { Gamer } from '../../models/gamer.interface';
import { ActivityStats } from '../models/activity-stats.interface';

@Injectable()
export class ActivityStatsResolver implements Resolve<ActivityStats> {
    gamer: Gamer;
    constructor(private charService: CharacterService ,
                private router: Router,
                private gamerInfo: GamerTagService
               ) { this.gamer = this.gamerInfo.get()}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      this.gamer = Object.assign({}, this.gamer, { characterId: route.params.id });
      return  this.charService.activityStats(this.gamer);
    }
}