import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { HEADERS, API_ROOT } from '../api';


@Component({
    selector: 'app-sport',
    templateUrl: './sport.component.html',
    styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {

    routeData: { apiRoute?: string };
    teams$;

    constructor(private route: ActivatedRoute, private http: Http) {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        this.teams$ = http.get(`${API_ROOT}${this.routeData.apiRoute}/teams`, { headers: HEADERS })
            .map(res => res.json())
            .map(json => json.teams);

    }

    ngOnInit() {
    }

}
