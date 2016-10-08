import { Component } from '@angular/core';
import { BASEBALL, BASKETBALL, FOOTBALL, HOCKEY } from './api.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    sports: {name: string, path: string}[];
    constructor () {
        this.sports = [
            {name: 'Baseball', path: BASEBALL},
            {name: 'Basketball', path: BASKETBALL},
            {name: 'Football', path: FOOTBALL},
            {name: 'Hockey', path: HOCKEY},
        ];
    }
}
