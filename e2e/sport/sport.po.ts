import { browser, element, by } from 'protractor';

export class SportsComponentPage {

    navigateTo() {
        return browser.get('/baseball/mlb');
    }

    pageTitle() {
        return 'SportStats';
    }

    activeBreadCrumb() {
        return element(by.css('.breadcrumb')).all(by.className('active')).first();
    }

    clickBreadCrumb(text) {
        return element(by.css('.breadcrumb')).all(by.linkText(text)).click();
    }

    activeComponent() {
        return element(by.css('div[data-component]'));
    }

    clickATeamLink() {
        element(by.css('div[data-team-container]')).all(by.tagName('a')).first().click();
    }

}
