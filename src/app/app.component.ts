import { Component } from '@angular/core';
import { SportsService } from './shared/sports.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [SportsService]
})
export class AppComponent {
    sports: { name: string, path: string }[];
    constructor(private sportsService: SportsService) {
        this.sports = this.sportsService.getSports();
    }
}
