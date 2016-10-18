import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent, SportComponent, TeamComponent, PlayerComponent } from './tests.module';
import { BASEBALL, BASKETBALL, FOOTBALL, HOCKEY } from '../app/api';

const routes: Routes = [
    {path: '', component: HomeComponent},

    // baseball/mlb
    {
        path: BASEBALL,
        component: SportComponent,
        data: {apiRoute: BASEBALL}
    },

    // basketball/nba
    {
        path: BASKETBALL,
        component: SportComponent,
        data: {apiRoute: BASKETBALL}
    },

    // football/nfl
    {
        path: FOOTBALL,
        component: SportComponent,
        data: {apiRoute: FOOTBALL}
    },

    // hockey/nhl
    {
        path: HOCKEY,
        component: SportComponent,
        data: {apiRoute: HOCKEY}
    },

    // baseball/mlb/players/:slug(/:page)(/:playerSlug)
    {
        path: `${BASEBALL}/players/:slug`,
        children: [{
            path: ':page',
            children: [{
                path: '',
                component: TeamComponent,
                data: {apiRoute: BASEBALL}
            }, {
                path: ':playerSlug',
                component: PlayerComponent,
                data: {apiRoute: BASEBALL}
            }]
        }, {
            path: '',
            redirectTo: '1',
            component: TeamComponent,
            data: {apiRoute: BASEBALL}
        }]
    },

    // baseball/nba/players/:slug(/:page)(/:playerSlug)
    {
        path: `${BASKETBALL}/players/:slug`,
        children: [{
            path: ':page',
            children: [{
                path: '',
                component: TeamComponent,
                data: {apiRoute: BASKETBALL}
            }, {
                path: ':playerSlug',
                component: PlayerComponent,
                data: {apiRoute: BASKETBALL}
            }]
        }, {
            path: '',
            redirectTo: '1',
            component: TeamComponent,
            data: {apiRoute: BASKETBALL}
        }]
    },

    // baseball/nfl/players/:slug(/:page)(/:playerSlug)
    {
        path: `${FOOTBALL}/players/:slug`,
        children: [{
            path: ':page',
            children: [{
                path: '',
                component: TeamComponent,
                data: {apiRoute: FOOTBALL}
            }, {
                path: ':playerSlug',
                component: PlayerComponent,
                data: {apiRoute: FOOTBALL}
            }]
        }, {
            path: '',
            redirectTo: '1',
            component: TeamComponent,
            data: {apiRoute: FOOTBALL}
        }]
    },

    // baseball/nhl/players/:slug(/:page)(/:playerSlug)
    {
        path: `${HOCKEY}/players/:slug`,
        children: [{
            path: ':page',
            children: [{
                path: '',
                component: TeamComponent,
                data: {apiRoute: HOCKEY}
            }, {
                path: ':playerSlug',
                component: PlayerComponent,
                data: {apiRoute: HOCKEY}
            }]
        }, {
            path: '',
            redirectTo: '1',
            component: TeamComponent,
            data: {apiRoute: HOCKEY}
        }]
    }
];

export const testRoutes = RouterTestingModule.withRoutes(routes);
