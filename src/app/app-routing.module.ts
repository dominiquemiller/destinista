import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { GamerSummaryResolver } from './services/gamer-info/gamer-info-resolver.service';

import { AuthGuard } from './guards/auth.guard';

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
  },
  { path: 'sign-in',
      canActivate: [ AuthGuard ],
      loadChildren: './sign-in/sign-in.module#SignInModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
