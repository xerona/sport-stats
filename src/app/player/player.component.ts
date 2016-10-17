import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { HEADERS, API_ROOT } from '../api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    routeData: { apiRoute?: string };
    slug: string;
    page: number;
    playerSlug: string;

    player$;

    constructor(private router: Router, private route: ActivatedRoute, private http: Http) {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        route.params
            .subscribe((p: any) => {
                this.slug = p.slug;
                this.playerSlug = p.playerSlug;
                this.page = p.page || 1;
            });
        this.player$ = http
            .get(
                `${API_ROOT}${this.routeData.apiRoute}/players?team_id=${this.slug}&page=${this.page}`,
                { headers: HEADERS }
            )
            .map(res => res.json())
            .map(json => json.players
                .filter(player => player.slug === this.playerSlug)
            );
    }

    ngOnInit() {
    }

}
