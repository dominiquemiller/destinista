import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { GamerSummaryResolver } from './services/gamer-info/gamer-info-resolver.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'menu/:network/:membershipId',
        resolve: {
          summary: GamerSummaryResolver
        },
        component: MenuComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
