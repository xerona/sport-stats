/// <reference path="../node_modules/@types/jasmine/index.d.ts" />


import { SportStatsPage } from './app.po';

describe('App Root', function() {
    let page: SportStatsPage;

    beforeEach(() => {
        page = new SportStatsPage();
    });

    it('should have the title SportStats', () => {
        page.navigateTo();
        expect(page.pageTitle()).toBe('SportStats');
    });

    it('should display the HomeComponent on load', () => {
        page.navigateTo();
        expect(page.activeComponent().getAttribute('data-component')).toBe('Home');
    });

    describe('App Root: BreadCrumbs', () => {
        it('should have the Home breadcrumb as active', () => {
            page.navigateTo();
            expect(page.activeBreadCrumb().getText()).toBe('Home');
        });
    });

    describe('App Root: Navigation Tabs', () => {
        for (let sport of ['Baseball', 'Football', 'Basketball', 'Hockey']) {
            it(`should display the SportComponent after clicking ${sport}`, () => {
                page.navigateTo();
                page.clickNavLink(sport);
                expect(page.activeComponent().getAttribute('data-component')).toBe('Sport');
                expect(page.activeTab().getText()).toBe(sport);
            });
            it(`should highlight the ${sport} tab after clicking ${sport}`, () => {
                page.navigateTo();
                page.clickNavLink(sport);
                expect(page.activeTab().getText()).toBe(sport);
            });
        }
    });
});
