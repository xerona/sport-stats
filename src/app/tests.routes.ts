import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent, SportComponent, TeamComponent, PlayerComponent } from './tests.module';
import { SportsService } from './shared/sports.service';


export const getRoutes = ({
    homeComponent = HomeComponent,
    sportComponent = SportComponent,
    teamComponent = TeamComponent,
    playerComponent = PlayerComponent
}) => {
    const sports: {name: string, path: string}[] = (new SportsService()).getSports();
    const routes: Routes = [];
    routes.push({path: '', component: homeComponent});
    routes.push({path: 'sport-stats', redirectTo: '', component: homeComponent});
    for (let sport of sports) {
        const data = {apiRoute: sport.path};
        routes.push({
            path: sport.path,
                children: [
                    {
                        path: '',
                        component: sportComponent,
                        data
                    }, {
                        path: 'players/:slug',
                        children: [
                            {
                                path: ':page',
                                children: [
                                    {
                                        path: '',
                                        component: teamComponent,
                                        data
                                    }, {
                                        path: ':playerSlug',
                                        component: playerComponent,
                                        data
                                    }
                                ]
                            }, {
                                path: '',
                                redirectTo: '1',
                                component: teamComponent,
                                data
                            }
                        ]
                    }
                ]
            },
        );
    }
    return RouterTestingModule.withRoutes(routes);
};
