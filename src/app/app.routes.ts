import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';

import { SportsService } from './shared/sports.service';

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
const getSportRoutes = (sports: {name: string, path: string}[]) => {
    const routes: Routes = [];
    for (let sport of sports) {
        const data = {apiRoute: sport.path};
        routes.push({
            path: sport.path,
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

const routes = [...homeRoutes, ...getSportRoutes((new SportsService()).getSports())];
export const appRoutes = RouterModule.forRoot(routes);
