import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class StatsService {

    headers: Headers;
    apiRoot: string;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Authorization', '91d0a9a939bdd90a0156fbeccb8b7900');
        this.headers.set('Accept', 'application/vnd.stattleship.com; version=1');
        this.apiRoot = 'https://api.stattleship.com/';
  }

    teams(sport: string) {
        const headers = this.headers;
        const url = `${this.apiRoot}/${sport}/teams`;

        return this.http
            .get(url, {headers})
            .map(res => res.json())
            .map(json => json.teams);
    }

    players(sport: string, team: string, page: number) {
        const headers = this.headers;
        const url = `${this.apiRoot}${sport}/players`;

        let search = new URLSearchParams();
        search.set('team_id', team);
        search.set('page', `${page}`);

        return this.http
            .get(url, {headers, search})
            .map(res => res.json())
            .map(json => json.players);
    }

    morePlayers(sport: string, team: string, page: number) {
        const headers = this.headers;
        const url = `${this.apiRoot}${sport}/players`;

        let search = new URLSearchParams();
        search.set('team_id', team);
        search.set('page', `${+page + 1}`);

        return this.http
            .get(url, {headers, search})
            .map(res => res.json())
            .map(json => json.teams);
    }

    player(sport: string, team: string, page: number, playerSlug: string) {
        const headers = this.headers;
        let search = new URLSearchParams();
        search.set('team_id', team);
        search.set('page', `${page}`);
        return this.http
            .get(`${this.apiRoot}${sport}/players`, {headers, search})
            .map(res => res.json())
            .map(json => json.players
                .filter(player => player.slug === playerSlug)
            );
    }

}
