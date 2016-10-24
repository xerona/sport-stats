import { browser, element, by } from 'protractor';

export class PlayerComponentPage {

    navigateTo() {
        return browser.get('/baseball/mlb/players/mlb-cle/5/mlb-danny-salazar');
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

    getStat(stat) {
        browser.wait(element(by.css(`tr[data-${stat}]`)).isPresent(), 1000);
        return element(by.css(`tr[data-${stat}]`));
    }
}
