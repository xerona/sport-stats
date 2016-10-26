import { browser, element, by } from 'protractor';

export class TeamComponentPage {

    navigateTo(page=1) {
        return browser.get(`/baseball/mlb/players/mlb-cle/${page}`);
    }

    navigateToLast() {
        return this.navigateTo(6);
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

    clickAPlayerLink() {
        element(by.css('div[data-player-container]')).all(by.css('tr[data-player-link]')).first().click();
    }

    isNextButtonAvailable() {
        browser.wait(element(by.css('a[data-next]')).isPresent(), 2000);
        return element(by.css('a[data-next]')).isPresent();
    }

    isPreviousButtonAvailable() {
        browser.wait(element(by.css('a[data-previous]')).isPresent(), 2000);
        return element(by.css('a[data-previous]')).isPresent();
    }

    clickNextButton() {
        browser.wait(element(by.css('a[data-next]')).isPresent(), 2000);
        element(by.css('a[data-next]')).click();
    }

    clickPreviousButton() {
        browser.wait(element(by.css('a[data-previous]')).isPresent(), 2000);
        element(by.css('a[data-previous]')).click();
    }

}
