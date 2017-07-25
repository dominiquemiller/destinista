import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { CharacterComponent } from './containers/character.component';

import { InventoryResolver } from './services/inventory.resolver.service';
import { CharacterService } from './services/character.service';

const routes: Routes = [
    { path: 'character/:id',
      component: CharacterComponent,
      resolve: {
        items: InventoryResolver
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
        CharacterComponent
    ],
    providers: [
        InventoryResolver,
        CharacterService
    ],
})
export class CharacterModule { }
