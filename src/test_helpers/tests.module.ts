import { NgModule, Component } from '@angular/core';

@Component({
    template: 'home'
})
class HomeComponent { }
@Component({
    template: 'sport'
})
class SportComponent { }
@Component({
    template: 'team'
})
class TeamComponent { }
@Component({
    template: 'player'
})
class PlayerComponent { }



const getTestModule = (
    home = HomeComponent,
    sport = SportComponent,
    team = TeamComponent,
    player = PlayerComponent
) => {
    @NgModule({
        declarations: [home, sport, team, player],
        exports: [home, sport, team, player],
    })
    class TestModule { }

    return TestModule
};

export {
    HomeComponent,
    SportComponent,
    TeamComponent,
    PlayerComponent,
    getTestModule
};
