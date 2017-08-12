import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { CharacterComponent } from './containers/character.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ActivityStatsComponent } from './components/activity-stats/activity-stats.component';
import { HistoricalStatsComponent } from './components/historical-stats/historical-stats.component';

import { InventoryResolver } from './services/inventory.resolver.service';
import { ActivityStatsResolver } from './services/activity-stats.resolver.service';
import { HistoricalStatsResolver } from './services/historical-stats.resolver.service';
import { CharacterService } from './services/character.service';

const routes: Routes = [
    { path: '',
      component: CharacterComponent,
      resolve: {
        items: InventoryResolver,
        activityStats: ActivityStatsResolver,
        historicalStats: HistoricalStatsResolver
      }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        CharacterComponent,
        InventoryComponent,
        ActivityStatsComponent,
        HistoricalStatsComponent
    ],
    providers: [
        InventoryResolver,
        ActivityStatsResolver,
        HistoricalStatsResolver,
        CharacterService
    ],
})
export class CharacterModule { }
