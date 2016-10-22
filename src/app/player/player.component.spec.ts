/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { PlayerComponent } from './player.component';
import { getActivatedRouteValue } from '../shared/test-activated-route';
import { MockStatsService } from '../shared/mock-stats.service';
import { StatsService } from '../shared/stats.service';


describe('Component: PlayerComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                PlayerComponent,
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
        let fixture = TestBed.createComponent(PlayerComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render the breadcrumbs', async(() => {
        let fixture = TestBed.createComponent(PlayerComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.breadcrumb')).toBeTruthy();
    }));

    it('should render a player', async(() => {
        let fixture = TestBed.createComponent(PlayerComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('[data-player-container]')).toBeTruthy();
    }));
});
