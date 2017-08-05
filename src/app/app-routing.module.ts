import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { SignInComponent } from './sign-in/containers/sign-in.component';
import { GamerSummaryResolver } from './services/gamer-info/gamer-info-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  { path: 'menu/:network/:membershipId',
    resolve: {
      summary: GamerSummaryResolver
    },
    component: MenuComponent
  },
  { path: 'character/:id',
      loadChildren: './character/character.module#CharacterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
