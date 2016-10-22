import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StatsService } from '../shared/stats.service';


@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

    routeData: {apiRoute?: string};

    sport: string;
    slug: string;
    page: number;

    players$: Observable<{}[]>;
    next$: Observable<{}[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private statsService: StatsService
    ) { }

    parseRouterData(route: ActivatedRoute): void {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        route.params
            .subscribe((p: any) => {
                this.slug = p.slug;
                this.page = p.page || 1;
            });
        this.sport = this.routeData.apiRoute;
    }

    fetchTemplateData(): void {
        this.players$ = this.statsService.players(this.sport, this.slug, this.page);
        this.next$ = this.statsService.morePlayers(this.sport, this.slug, this.page);
    }

    next(): void {
        this.goTo(+this.page + 1);
    }

    previous(): void {
        this.goTo(Math.max(+this.page - 1, 1));
    }

    goTo(page: number): void {
        this.router.navigateByUrl(`/${this.sport}/players/${this.slug}/${page}`);
        this.page = page;
        this.fetchTemplateData();
    }

    ngOnInit() {
        this.parseRouterData(this.route);
        this.fetchTemplateData();
    }

}
