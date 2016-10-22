import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StatsService } from '../shared/stats.service';


@Component({
    selector: 'app-sport',
    templateUrl: './sport.component.html',
    styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

    routeData: { apiRoute?: string };

    sport: string;

    teams$: Observable<{}[]>;

    constructor(
        private route: ActivatedRoute,
        private statsService: StatsService
    ) { }

    parseRouterData(route: ActivatedRoute): void {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        this.sport = this.routeData.apiRoute;
    }

    fetchTemplateData(): void {
        this.teams$ = this.statsService.teams(this.sport);
    }

    ngOnInit() {
        this.parseRouterData(this.route);
        this.fetchTemplateData();
    }
}
