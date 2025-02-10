import { expect, Page, TestInfo } from '@playwright/test';
import { locators } from '../LoginPage/LoginPageLocators';
import { testdata } from '../../test/testData';
import { CommonPage } from '../../base_fwk/common/CommonPage';
import { CommonScenario } from '../../base_fwk/common/CommonScenario';

export class LoginPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async goTo() {
        await this.page.goto('', {waitUntil: "domcontentloaded"});
    }

    async login(username: string, password: string) {
        await this.page.locator(locators.username).fill(username);
        await this.page.locator(locators.password).fill(password);
        await this.page.locator(locators.loginbutton).click();
        await this.page.waitForLoadState("domcontentloaded");
    }
}
