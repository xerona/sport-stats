import { browser, element, by } from 'protractor';

export class SportStatsPage {

    pageTitle() {
        return 'SportStats';
    }

    activeBreadCrumb() {
        return element(by.css('.breadcrumb')).all(by.className('active')).first()
    }

    activeTab() {
        return element(by.css('.navbar-nav')).all(by.className('active')).first()
    }

    activeComponent() {
        return element(by.css('div[data-component]'));
    }

    navigateTo() {
        return browser.get('/');
    }

    clickNavLink(navLink) {
        element(by.linkText(navLink)).click()
    }

}
