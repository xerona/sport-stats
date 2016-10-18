import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportComponent } from './sport/sport.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SportComponent,
        TeamComponent,
        PlayerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
