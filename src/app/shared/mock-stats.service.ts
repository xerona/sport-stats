import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { teams, players, player } from './test-data';


@Injectable()
export class MockStatsService {

    constructor() { }

    teams(sport: string) {
        return Observable.from([teams]);
    }

    players(sport: string, team: string, page: number) {
        const index = +page - 1;
        return Observable.from([players[index]]);
    }

    morePlayers(sport: string, team: string, page: number) {
        const index = +page;
        if (players.length <= index) {
            return Observable.from([]);
        }
        return Observable.from([players[index]]);
    }

    player(sport: string, team: string, page: number, playerSlug: string) {
        return Observable.from([player]);
    }

};
