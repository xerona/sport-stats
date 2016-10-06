import { Headers } from '@angular/http';

export const HEADERS: Headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': '91d0a9a939bdd90a0156fbeccb8b7900',
    'Accept': 'application/vnd.stattleship.com; version=1'
});

export const API_ROOT: string = 'https://api.stattleship.com/';

export const BASEBALL: string = 'baseball/mlb';
export const BASKETBALL: string = 'basketball/nba';
export const FOOTBALL: string = 'football/nfl';
export const HOCKEY: string = 'hockey/nhl';
