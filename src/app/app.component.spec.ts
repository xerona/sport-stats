/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { getTestModule } from './tests-module';


describe('App: SportStats', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                getTestModule({}),
                RouterTestingModule
            ]
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as sports a list of all the sports sports`, async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.sports).toEqual([
            { name: 'Baseball', path: 'baseball/mlb' },
            { name: 'Basketball', path: 'basketball/nba' },
            { name: 'Football', path: 'football/nfl' },
            { name: 'Hockey', path: 'hockey/nhl' },
        ]);
    }));

    it('should render the nav bar', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.nav').querySelectorAll('li').length).toEqual(4);
    }));

    it('should render router outlet', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    }));
});
