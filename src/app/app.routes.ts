import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { TeamComponent } from './team/team.component';

import {
    HEADERS,
    API_ROOT,
    BASEBALL,
    BASKETBALL,
    FOOTBALL,
    HOCKEY
} from './api.ts';

/* TODO:
 *  Find a better way to map multiple paths to same component.
 *  Ideally, find a way to not pass the route for the route.
 */
const routes: Routes = [
    {path: '', component: HomeComponent},

    {path: BASEBALL, component: SportComponent, data: {apiRoute: BASEBALL}},
    {path: BASKETBALL, component: SportComponent, data: {apiRoute: BASKETBALL}},
    {path: FOOTBALL, component: SportComponent, data: {apiRoute: FOOTBALL}},
    {path: HOCKEY, component: SportComponent, data: {apiRoute: HOCKEY}},

    {path: `${BASEBALL}/players/:slug`, component: TeamComponent, data: {apiRoute: BASEBALL}},
    {path: `${BASKETBALL}/players/:slug`, component: TeamComponent, data: {apiRoute: BASKETBALL}},
    {path: `${FOOTBALL}/players/:slug`, component: TeamComponent, data: {apiRoute: FOOTBALL}},
    {path: `${HOCKEY}/players/:slug`, component: TeamComponent, data: {apiRoute: HOCKEY}}
];

export default RouterModule.forRoot(routes);
