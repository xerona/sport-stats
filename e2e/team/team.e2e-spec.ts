/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />


import { TeamComponentPage } from './team.po';

describe('Team Component', () => {
    let page: TeamComponentPage;

    beforeEach(() => {
        page = new TeamComponentPage();
    });

    it('should have the title SportStats', () => {
        page.navigateTo();
        expect(page.pageTitle()).toBe('SportStats');
    });

    it('should display the TeamComponent on load', () => {
        page.navigateTo();
        expect(page.activeComponent().getAttribute('data-component')).toBe('Team');
    });

    describe('Team Component: Player Links', () => {
        it('should display the PlayerComponent when a player is clicked', () => {
            page.navigateTo();
            page.clickAPlayerLink();
            expect(page.activeComponent().getAttribute('data-component')).toBe('Player');
        });
    });

    describe('Team Component: BreadCrumbs', () => {
        it('should have the Players breadcrumb as active', () => {
            page.navigateTo();
            expect(page.activeBreadCrumb().getText()).toBe('Players');
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

    describe('Team Component: Previous Button', () => {
        it('should not display the previous button on the first page', () => {
            page.navigateTo();
            expect(page.isPreviousButtonAvailable()).toBeFalsy();
        });
        it('should display the previous button on the last page', () => {
            page.navigateToLast();
            expect(page.isPreviousButtonAvailable()).toBeTruthy();
        });
        it('should display the previous button on the second page', () => {
            page.navigateTo(2);
            expect(page.isPreviousButtonAvailable()).toBeTruthy();
        });
        it('should display the TeamComponent when previous is clicked', () => {
            page.navigateTo(2);
            page.clickPreviousButton();
            expect(page.activeComponent().getAttribute('data-component')).toBe('Team');
        });
    });

    describe('Team Component: Next Button', () => {
        it('should display the next button on the first page', () => {
            page.navigateTo();
            expect(page.isNextButtonAvailable()).toBeTruthy();
        });
        it('should not display the next button on the last page', () => {
            page.navigateToLast();
            expect(page.isNextButtonAvailable()).toBeFalsy();
        });
        it('should display the next button on the second page', () => {
            page.navigateTo(2);
            expect(page.isNextButtonAvailable()).toBeTruthy();
        });
        it('should display the TeamComponent when next is clicked', () => {
            page.navigateTo();
            page.clickNextButton();
            expect(page.activeComponent().getAttribute('data-component')).toBe('Team');
        });
    });
});
