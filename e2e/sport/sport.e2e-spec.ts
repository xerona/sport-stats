/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />


import { SportsComponentPage } from './sport.po';

describe('Sport Component', function() {
    let page: SportsComponentPage;

    beforeEach(() => {
        page = new SportsComponentPage();
    });

    it('should have the title SportStats', () => {
        page.navigateTo();
        expect(page.pageTitle()).toBe('SportStats');
    });

    it('should display the SportComponent on load', () => {
        page.navigateTo();
        expect(page.activeComponent().getAttribute('data-component')).toBe('Sport');
    });

    describe('Sport Component: BreadCrumbs', () => {
        it('should have the Teams breadcrumb as active', () => {
            page.navigateTo();
            expect(page.activeBreadCrumb().getText()).toBe('Teams');
        });
        it('should display the HomeComponent when Home is clicked', () => {
            page.navigateTo();
            page.clickBreadCrumb('Home');
            expect(page.activeComponent().getAttribute('data-component')).toBe('Home');
        });
    });

    describe('Sport Component: Team Links', () => {
        it('should display the TeamComponent when a team is clicked', () => {
            page.navigateTo();
            page.clickATeamLink();
            expect(page.activeComponent().getAttribute('data-component')).toBe('Team');
        });
    });

});
