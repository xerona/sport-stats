/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule, Component } from '@angular/core';

import { BASEBALL, BASKETBALL, FOOTBALL, HOCKEY } from './api';

@Component({
    template: 'home'
})
class HomeComponent { }
@Component({
    template: 'sport'
})
class SportComponent { }
@Component({
    template: 'team'
})
class TeamComponent { }
@Component({
    template: 'player'
})
class PlayerComponent { }

@NgModule({
    declarations: [HomeComponent, SportComponent, TeamComponent, PlayerComponent],
    exports: [HomeComponent, SportComponent, TeamComponent, PlayerComponent],
})
class MockModule { }

describe('App: SportStats', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                MockModule,
                RouterTestingModule.withRoutes([
                    {path: '', component: HomeComponent},

                    // baseball/mlb
                    {
                        path: BASEBALL,
                        component: SportComponent,
                        data: {apiRoute: BASEBALL}
                    },

                    // basketball/nba
                    {
                        path: BASKETBALL,
                        component: SportComponent,
                        data: {apiRoute: BASKETBALL}
                    },

                    // football/nfl
                    {
                        path: FOOTBALL,
                        component: SportComponent,
                        data: {apiRoute: FOOTBALL}
                    },

                    // hockey/nhl
                    {
                        path: HOCKEY,
                        component: SportComponent,
                        data: {apiRoute: HOCKEY}
                    },

                    // baseball/mlb/players/:slug(/:page)(/:playerSlug)
                    {
                        path: `${BASEBALL}/players/:slug`,
                        children: [{
                            path: ':page',
                            children: [{
                                path: '',
                                component: TeamComponent,
                                data: {apiRoute: BASEBALL}
                            }, {
                                path: ':playerSlug',
                                component: PlayerComponent,
                                data: {apiRoute: BASEBALL}
                            }]
                        }, {
                            path: '',
                            redirectTo: '1',
                            component: TeamComponent,
                            data: {apiRoute: BASEBALL}
                        }]
                    },

                    // baseball/nba/players/:slug(/:page)(/:playerSlug)
                    {
                        path: `${BASKETBALL}/players/:slug`,
                        children: [{
                            path: ':page',
                            children: [{
                                path: '',
                                component: TeamComponent,
                                data: {apiRoute: BASKETBALL}
                            }, {
                                path: ':playerSlug',
                                component: PlayerComponent,
                                data: {apiRoute: BASKETBALL}
                            }]
                        }, {
                            path: '',
                            redirectTo: '1',
                            component: TeamComponent,
                            data: {apiRoute: BASKETBALL}
                        }]
                    },

                    // baseball/nfl/players/:slug(/:page)(/:playerSlug)
                    {
                        path: `${FOOTBALL}/players/:slug`,
                        children: [{
                            path: ':page',
                            children: [{
                                path: '',
                                component: TeamComponent,
                                data: {apiRoute: FOOTBALL}
                            }, {
                                path: ':playerSlug',
                                component: PlayerComponent,
                                data: {apiRoute: FOOTBALL}
                            }]
                        }, {
                            path: '',
                            redirectTo: '1',
                            component: TeamComponent,
                            data: {apiRoute: FOOTBALL}
                        }]
                    },

                    // baseball/nhl/players/:slug(/:page)(/:playerSlug)
                    {
                        path: `${HOCKEY}/players/:slug`,
                        children: [{
                            path: ':page',
                            children: [{
                                path: '',
                                component: TeamComponent,
                                data: {apiRoute: HOCKEY}
                            }, {
                                path: ':playerSlug',
                                component: PlayerComponent,
                                data: {apiRoute: HOCKEY}
                            }]
                        }, {
                            path: '',
                            redirectTo: '1',
                            component: TeamComponent,
                            data: {apiRoute: HOCKEY}
                        }]
                    }
                ])
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
