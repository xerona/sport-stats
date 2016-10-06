import { Component, OnInit } from '@angular/core';
import {
    HEADERS,
    API_ROOT,
    BASEBALL,
    BASKETBALL,
    FOOTBALL,
    HOCKEY
} from '../api.ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    sports: {name: string, path: string}[];

  // constructor(private http:Htt) {
    // this.sports$ = http.get('https://starwars-json-server-ewtdxbyfdz.now.sh/people')
    //   .map(res => res.json());
    constructor () {
        this.sports = [
            {name: 'Baseball', path: BASEBALL},
            {name: 'Basketball', path: BASKETBALL},
            {name: 'Football', path: FOOTBALL},
            {name: 'Hockey', path: HOCKEY},
        ];
    }

  ngOnInit() {
  }

}
