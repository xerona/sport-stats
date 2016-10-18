import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from '../shared/stats.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
    providers: [StatsService]
})
export class PlayerComponent implements OnInit {

    routeData: { apiRoute?: string };

    sport: string;
    slug: string;
    page: number;
    playerSlug: string;

    player$;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private statsService: StatsService
    ) {
        this.parseRouterData(route);
        this.fetchTemplateData();
    }

    parseRouterData(route: ActivatedRoute) {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        route.params
            .subscribe((p: any) => {
                this.slug = p.slug;
                this.playerSlug = p.playerSlug;
                this.page = p.page || 1;
            });
        this.sport = this.routeData.apiRoute;
    }

    fetchTemplateData(): void {
        this.player$ = this.statsService.player(this.sport, this.slug, this.page, this.playerSlug);
    }

    ngOnInit() { }

}
