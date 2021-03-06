import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CharacterService } from './character.service';
import { GamerTagService } from '../../services/gamer-tag/gamer-tag.service';
import { Gamer } from '../../models/gamer.interface';

import { BungieApi } from '../../models/bungie.api.interface';

@Injectable()
export class HistoricalStatsResolver implements Resolve<BungieApi> {
    gamer: Gamer;
    constructor(private charService: CharacterService ,
                private router: Router,
                private gamerInfo: GamerTagService
               ) { this.gamer = this.gamerInfo.get()}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      this.gamer = Object.assign({}, this.gamer, { characterId: route.parent.params.id });
      return  this.charService.historicalStats(this.gamer);
    }
}