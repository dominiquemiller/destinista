import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GamerTagService } from './services/gamer-tag/gamer-tag.service';

import { AppComponent } from './app.component';

// stubbed child component
@Component({
  selector: 'app-spinner',
  template: ``
})
class AppSpinnerComponent {};

// mock services and spy on method
const router = {
  navigateByUrl: jasmine.createSpy('navigateByUrl')
}

class GamerTag {
    gamer = { network: 1, membershipId: 33 };

    get() { return this.gamer };
}



describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useValue: router},
        { provide: GamerTagService, useClass: GamerTag }
      ],
      declarations: [
        AppComponent,
        AppSpinnerComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));


  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Destinista!'`, async(() => {
    expect(app.title).toEqual('Destinista!');
  }));

  it('should navigate to menu if gamer info stored', () => {
     fixture.detectChanges();
     expect(router.navigateByUrl).toHaveBeenCalledWith(`menu/1/33`);
  });

  it('should navigate to sign-in if no gamer info found', () => {
     app.gamerTag.gamer = false;
     fixture.detectChanges();
     expect(router.navigateByUrl).toHaveBeenCalledWith('sign-in');
  });
  
});
