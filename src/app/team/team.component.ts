import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { HEADERS, API_ROOT } from '../api';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
/* TODO:
 *  Ensure subscribe only happens once.
 *  There are currently two requests.
 */
export class TeamComponent implements OnInit {
    routeData: { apiRoute?: string };
    slug: string;
    page: number;
    players$;
    next$;

    constructor(private router: Router, private route: ActivatedRoute, private http: Http) {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        route.params
            .subscribe((p: any) => {
                this.slug = p.slug;
                this.page = p.page || 1;
            });
        /* TODO:
         *  Consider consolidating fetch with data or param mapping
         */
        this.players$ = http
            .get(
                `${API_ROOT}${this.routeData.apiRoute}/players?team_id=${this.slug}&page=${this.page}`,
                { headers: HEADERS }
            )
            .map(res => res.json())
            .map(json => json.players);
        this.next$ = http
            .get(
                `${API_ROOT}${this.routeData.apiRoute}/players?team_id=${this.slug}&page=${+this.page + 1}`,
                { headers: HEADERS }
            )
            .map(res => res.json())
            .map(json => json.teams);

    }

    next(): void {
        this.goTo(+this.page + 1);
    }

    previous(): void {
        this.goTo(Math.max(+this.page - 1, 1));
    }

    goTo(page: number): void {
        this.router.navigateByUrl(`/${this.routeData.apiRoute}/players/${this.slug}/${page}`);
        this.page = page;
        this.players$ = this.http
            .get(
                `${API_ROOT}${this.routeData.apiRoute}/players?team_id=${this.slug}&page=${this.page}`,
                { headers: HEADERS }
            )
            .map(res => res.json())
            .map(json => json.players);
        this.next$ = this.http
            .get(
                `${API_ROOT}${this.routeData.apiRoute}/players?team_id=${this.slug}&page=${+this.page + 1}`,
                { headers: HEADERS }
            )
            .map(res => res.json())
            .map(json => json.teams);
    }

    ngOnInit() {
    }

}
