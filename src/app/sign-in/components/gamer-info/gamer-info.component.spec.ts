import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GamerInfoComponent } from './gamer-info.component';

describe('GamerInfoComponent', () => {

    describe('template', () => {
        let fixture: ComponentFixture<GamerInfoComponent>;
        let comp: GamerInfoComponent;
        let el;

        beforeEach( async( () => {

            TestBed.configureTestingModule({
                declarations: [
                    GamerInfoComponent
                ],
                imports: [
                    FormsModule,
                    ReactiveFormsModule
                ]
            })

            fixture = TestBed.createComponent(GamerInfoComponent);
            comp = fixture.componentInstance;
            el = fixture.nativeElement;
        }));

        afterEach( () => {
            document.body.removeChild(el);
        })

        it('should emit form data on submit', () => {
            const select = el.querySelector('select');
            const input = el.querySelector('input[type=text]');
            const button = el.querySelector('button[type=submit]');

            let submitValue;

            fixture.detectChanges();

            select.value = '1';
            select.dispatchEvent( new Event('change'));
            input.value = 'mr1monkey';
            input.dispatchEvent( new Event('input'));

            fixture.detectChanges();

            comp.submitted.subscribe( (value) => {
                submitValue = value;
            });

            button.click();

            expect(submitValue.network).toEqual('1');
            expect(submitValue.tag).toEqual('mr1monkey');

        })
    });

    describe('Integration', () => {
        let fixture: ComponentFixture<AppRootComponent>;
        let comp: AppRootComponent;
        let el;
        // parent component stub
        // tested component is the child component
        @Component({
            selector: 'app-root',
            template: `<app-gamer-info (submitted)="getData($event)"></app-gamer-info>`
        })
        class AppRootComponent {
            network: string;
            tag: string;

            getData(event) {
                this.network = event.network;
                this.tag = event.tag;
            }
        }

        beforeEach( async( () => {

            TestBed.configureTestingModule({
                declarations: [
                    GamerInfoComponent,
                    AppRootComponent
                ],
                imports: [
                    FormsModule,
                    ReactiveFormsModule
                ]
            })

            fixture = TestBed.createComponent(AppRootComponent);
            comp = fixture.componentInstance;
            el = fixture.nativeElement;
        }));

        afterEach( () => {
            document.body.removeChild(el);
        })

        it('should emit form data on submit', () => {
            const select = el.querySelector('select');
            const input = el.querySelector('input[type=text]');
            const button = el.querySelector('button[type=submit]');

            fixture.detectChanges();

            select.value = '1';
            select.dispatchEvent( new Event('change'));
            input.value = 'mr1monkey';
            input.dispatchEvent( new Event('input'));

            fixture.detectChanges();

            button.click();

            expect(comp.network).toEqual('1');
            expect(comp.tag).toEqual('mr1monkey');

        })
        
    });
});
