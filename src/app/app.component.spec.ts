import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GamerTagService } from './services/gamer-tag/gamer-tag.service';
import { SpinnerService } from './easy-spinner/services/spinner.service';
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

const spinner = {
  show: jasmine.createSpy('show'),
  hide: jasmine.createSpy('hide')
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
        { provide: SpinnerService, useValue: spinner },
        { provide: Router, useValue: router },
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

});
