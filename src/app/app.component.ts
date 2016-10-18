import { Component } from '@angular/core';
import { BASEBALL, BASKETBALL, FOOTBALL, HOCKEY } from './api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    sports: { name: string, path: string }[];
    constructor() {
        /* TODO:
         *   I think this can be service.
         *   Research that.
         */
        this.sports = [
            { name: 'Baseball', path: BASEBALL },
            { name: 'Basketball', path: BASKETBALL },
            { name: 'Football', path: FOOTBALL },
            { name: 'Hockey', path: HOCKEY },
        ];
    }
}
