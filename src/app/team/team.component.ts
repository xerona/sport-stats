import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

import { HEADERS, API_ROOT } from '../api';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
/* TODO:
 *  Ensure subscribe only happens once.
 *  There are currently two requests.
 */
export class TeamComponent implements OnInit {
    routeData: {apiRoute?: string};
    slug: string;
    players$;

    constructor(private route:ActivatedRoute, private http:Http) {
        route.data.subscribe((d) => {
            this.routeData = d;
        });
        route.params
          .subscribe((p:any) => {
              this.slug = p.slug;
          });
        /* TODO:
         *  Consider consolidating fetch with data or param mapping
         */
        this.players$ = http.get(`${API_ROOT}${this.routeData.apiRoute}/players?team_id=${this.slug}`, {headers: HEADERS})
          .map(res => res.json())
          .map(json => json.players);

    }

  ngOnInit() {
  }

}
