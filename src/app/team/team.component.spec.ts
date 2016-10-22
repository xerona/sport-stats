/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

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
            RouterTestingModule
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

    it('should create the component', async(() => {
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
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(
            compiled
                .querySelector('[data-player-container]')
                .querySelectorAll('[data-player-link]')
                .length
        ).toEqual(
            players[page].length
        );
    }));

    it('should render the next button if there are more players', async(() => {
        const page = 1;
        makeTestBed(page);
        let fixture = TestBed.createComponent(TeamComponent);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('[data-next]')).toBeTruthy();
        });
    }));

    it('should not render the previous button on the first page', async(() => {
        const page = 1;
        makeTestBed(page);
        let fixture = TestBed.createComponent(TeamComponent);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('[data-previous]')).toBeNull();
        });
    }));

    it('should render the previous button if it is not the first page', async(() => {
        const page = players.length;
        makeTestBed(page);
        let fixture = TestBed.createComponent(TeamComponent);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('[data-previous]')).toBeTruthy();
        });
    }));

});
