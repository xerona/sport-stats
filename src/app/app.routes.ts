import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';

import { BASEBALL, BASKETBALL, FOOTBALL, HOCKEY } from './api.ts';

const sports: string[] = [BASEBALL, BASKETBALL, FOOTBALL, HOCKEY];
const homeRoutes: Routes = [
    // home
    {
        path: '',
        component: HomeComponent
    },
    // gh-pages
    {
        path: 'sport-stats',
        redirectTo: '',
        component: HomeComponent
    }
];
const getSportRoutes = (sports: string[]) => {
    const routes: Routes = [];
    for (let sport of sports) {
        const data = {apiRoute: sport};
        routes.push({
            path: sport,
                children: [
                    {
                        path: '',
                        component: SportComponent,
                        data
                    }, {
                        path: 'players/:slug',
                        children: [
                            {
                                path: ':page',
                                children: [
                                    {
                                        path: '',
                                        component: TeamComponent,
                                        data
                                    }, {
                                        path: ':playerSlug',
                                        component: PlayerComponent,
                                        data
                                    }
                                ]
                            }, {
                                path: '',
                                redirectTo: '1',
                                component: TeamComponent,
                                data
                            }
                        ]
                    }
                ]
            },
        );
    }
    return routes;
}

const routes = [...homeRoutes, ...getSportRoutes(sports)];
export const appRoutes = RouterModule.forRoot(routes);
