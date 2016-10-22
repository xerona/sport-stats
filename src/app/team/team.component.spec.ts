/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpModule }      from '@angular/http';

import { TeamComponent } from './team.component';
import { getActivatedRouteValue } from '../shared/test-activated-route';
import { MockStatsService } from '../shared/mock-stats.service';
import { StatsService } from '../shared/stats.service';
import { players } from '../shared/test-data';

const makeTestBed = (page: number) => {
    TestBed.configureTestingModule({
        declarations: [
            TeamComponent,
        ],
        imports: [
            RouterTestingModule,
            HttpModule
        ],
        providers: [{
            provide: ActivatedRoute, useValue: getActivatedRouteValue({
                slug: 'mlb-cle',
                page: page
            }, {
                apiRoute: 'baseball/mlb'
            })
        }, {
            provide: StatsService, useClass: MockStatsService
        }]
    });
};

describe('App: SportStats', () => {

    it('should create the compnent', async(() => {
        makeTestBed(1);
        let fixture = TestBed.createComponent(TeamComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render the breadcrumbs', async(() => {
        makeTestBed(1);
        let fixture = TestBed.createComponent(TeamComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.breadcrumb')).toBeTruthy();
    }));

    it('should render a link for each player', async(() => {
        const page = 1;
        makeTestBed(page);
        let fixture = TestBed.createComponent(TeamComponent);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('[data-player-container]').querySelectorAll('a').length).toEqual(players[page].length);
        });
    }));

});
