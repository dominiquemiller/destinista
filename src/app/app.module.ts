import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { SpinnerModule } from './easy-spinner/spinner.module';
import { SignInModule } from './sign-in/sign-in.module';
import { CharacterModule } from './character/character.module';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

// Services
import { GamerTagService } from './services/gamer-tag/gamer-tag.service';
import { GamerInfoService } from './services/gamer-info/gamer-info.service';
import { GamerSummaryResolver } from './services/gamer-info/gamer-info-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SpinnerModule,
    SignInModule,
    CharacterModule
  ],
  providers: [
    GamerTagService,
    GamerInfoService,
    GamerSummaryResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
