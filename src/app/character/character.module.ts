import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { CharacterComponent } from './containers/character/character.component';
import { InventoryComponent } from './containers/inventory/inventory.component';
import { ActivityStatsComponent } from './containers/activity-stats/activity-stats.component';
import { HistoricalStatsComponent } from './containers/historical-stats/historical-stats.component';
import { CharNavComponent } from './components/char-nav/char-nav.component';
import { ItemComponent } from './components/item/item.component';
import { HistoricalStatComponent } from './components/historical-stat/historical-stat.component';

// services
import { InventoryResolver } from './services/inventory.resolver.service';
import { ActivityStatsResolver } from './services/activity-stats.resolver.service';
import { HistoricalStatsResolver } from './services/historical-stats.resolver.service';
import { CharacterService } from './services/character.service';

const routes: Routes = [
    { path: '',
      component: CharacterComponent,
      children: [
        { path: 'inventory', component: InventoryComponent, resolve: { inventory: InventoryResolver } },
        { path: 'activity', component: ActivityStatsComponent, resolve: { activityStats: ActivityStatsResolver } },
        { path: 'historical', component: HistoricalStatsComponent, resolve: { historicalStats: HistoricalStatsResolver } }
     ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        InventoryComponent,
        ActivityStatsComponent,
        HistoricalStatsComponent,
        CharacterComponent,
        CharNavComponent,
        ItemComponent,
        HistoricalStatComponent
    ],
    providers: [
        InventoryResolver,
        ActivityStatsResolver,
        HistoricalStatsResolver,
        CharacterService
    ],
})
export class CharacterModule { }
