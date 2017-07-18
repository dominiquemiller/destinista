import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { SpinnerModule } from './easy-spinner/spinner.module';

// Components
import { AppComponent } from './app.component';
import { GamerInfoComponent } from './components/gamer-info/gamer-info.component';

// Services
import { GamerTagService } from './services/gamer-tag/gamer-tag.service';
import { GamerInfoService } from './services/gamer-info/gamer-info.service';

@NgModule({
  declarations: [
    AppComponent,
    GamerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    SpinnerModule
  ],
  providers: [
    GamerTagService,
    GamerInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
