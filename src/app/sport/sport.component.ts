import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from '../shared/stats.service';


@Component({
    selector: 'app-sport',
    templateUrl: './sport.component.html',
    styleUrls: ['./sport.component.scss'],
    providers: [StatsService]
})
export class SportComponent implements OnInit {

    routeData: { apiRoute?: string };

    sport: string;

    teams$;

    constructor(
        private route: ActivatedRoute,
        private statsService: StatsService
    ) {
        this.parseRouterData(route);
        this.fetchTemplateData();
    }

    parseRouterData(route: ActivatedRoute): void {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        this.sport = this.routeData.apiRoute;
    }

    fetchTemplateData(): void {
        this.teams$ = this.statsService.teams(this.sport);
    }

    ngOnInit() { }
}
