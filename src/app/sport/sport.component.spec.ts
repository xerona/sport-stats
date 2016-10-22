/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { SportComponent } from './sport.component';
import { getActivatedRouteValue } from '../shared/test-activated-route';
import { MockStatsService } from '../shared/mock-stats.service';
import { StatsService } from '../shared/stats.service';
import { teams } from '../shared/test-data';

describe('Component: SportComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SportComponent,
            ],
            imports: [
                RouterTestingModule
            ],
            providers: [{
                provide: ActivatedRoute, useValue: getActivatedRouteValue({}, {
                    apiRoute: 'baseball/mlb'
                })
            }, {
                provide: StatsService, useClass: MockStatsService
            }]
        });
    });

    it('should create the component', async(() => {
        let fixture = TestBed.createComponent(SportComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render the breadcrumbs', async(() => {
        let fixture = TestBed.createComponent(SportComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.breadcrumb')).toBeTruthy();
    }));

    it('should render a link for each team', async(() => {
        let fixture = TestBed.createComponent(SportComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(
            compiled
                .querySelector('[data-team-container]')
                .querySelectorAll('[data-team-link]')
                .length
        ).toEqual(
            teams.length
        );
    }));
});
