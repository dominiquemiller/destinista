import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { GamerInfoComponent } from './components/gamer-info/gamer-info.component';

// Services
import { GamerTagService } from './services/gamer-tag.service';

@NgModule({
  declarations: [
    AppComponent,
    GamerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    GamerTagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
