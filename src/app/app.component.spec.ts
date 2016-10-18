import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { testRoutes } from '../test_helpers/tests.routes';
import { getTestModule } from '../test_helpers/tests.module';
import { BASEBALL, BASKETBALL, FOOTBALL, HOCKEY } from './api';

describe('App: SportStats', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                getTestModule(),
                testRoutes
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
            { name: 'Baseball', path: BASEBALL },
            { name: 'Basketball', path: BASKETBALL },
            { name: 'Football', path: FOOTBALL },
            { name: 'Hockey', path: HOCKEY },
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
