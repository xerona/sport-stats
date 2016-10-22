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



const getTestModule = ({
    homeComponent = HomeComponent,
    sportComponent = SportComponent,
    teamComponent = TeamComponent,
    playerComponent = PlayerComponent
}) => {
    @NgModule({
        declarations: [homeComponent, sportComponent, teamComponent, playerComponent],
        exports: [homeComponent, sportComponent, teamComponent, playerComponent],
    })
    class TestModule { }

    return TestModule;
};

export {
    HomeComponent,
    SportComponent,
    TeamComponent,
    PlayerComponent,
    getTestModule
};
