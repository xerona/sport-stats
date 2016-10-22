import { Injectable } from '@angular/core';

@Injectable()
export class SportsService {

    sports: Array<{name: string, path: string}>;

    constructor() {
        this.sports = [
            { name: 'Baseball', path: 'baseball/mlb' },
            { name: 'Basketball', path: 'basketball/nba' },
            { name: 'Football', path: 'football/nfl' },
            { name: 'Hockey', path: 'hockey/nhl' },
        ];
    }

    getSports() {
        return this.sports;
    }

}
