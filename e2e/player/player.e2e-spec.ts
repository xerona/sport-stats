/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />


import { PlayerComponentPage } from './player.po';

describe('Player Component', () => {
    let page: PlayerComponentPage;

    beforeEach(() => {
        page = new PlayerComponentPage();
    });

    it('should have the title SportStats', () => {
        page.navigateTo();
        expect(page.pageTitle()).toBe('SportStats');
    });

    it('should display the PlayerComponent on load', () => {
        page.navigateTo();
        expect(page.activeComponent().getAttribute('data-component')).toBe('Player');
    });

    describe('Player Component: BreadCrumbs', () => {
        it('should have the Players breadcrumb as active', () => {
            page.navigateTo();
            expect(page.activeBreadCrumb().getText()).toBe('Player');
        });
        it('should display the TeamComponent when Players is clicked', () => {
            page.navigateTo();
            page.clickBreadCrumb('Players');
            expect(page.activeComponent().getAttribute('data-component')).toBe('Team');
        });
        it('should display the SportComponent when Teams is clicked', () => {
            page.navigateTo();
            page.clickBreadCrumb('Teams');
            expect(page.activeComponent().getAttribute('data-component')).toBe('Sport');
        });
        it('should display the HomeComponent when Home is clicked', () => {
            page.navigateTo();
            page.clickBreadCrumb('Home');
            expect(page.activeComponent().getAttribute('data-component')).toBe('Home');
        });
    });

    describe('Player Component: Player Stats', () => {
        it('should display provided stats', () => {
            page.navigateTo();
            expect(page.getStat('player-birth-date').isPresent()).toBeTruthy();
        });
        it('should not display missing stats', () => {
            page.navigateTo();
            expect(page.getStat('player-draft-round').isPresent()).toBeFalsy();
        });
        // it('should not display bats_unknown', () => {
        //     page.navigateTo();
        //     expect(page.getStat('player-bats').isPresent()).toBeFalsy();
        // }); // danny salazar bats_right now. who knew?
    });
});
