import { expect, Page } from "@playwright/test";
// import { locators } from '../DashboardPage/DasboardPageLocators';
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";

export class CartPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async verifyProductIsDisplayed(productName: string) {
        const selectedProductElement = this.page.getByRole('heading', { name: productName });
        await selectedProductElement.waitFor({ state: "visible" });
        expect(selectedProductElement.isVisible).toBeTruthy();
    };

    async clickOnCheckoutButton() {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
        await this.page.waitForLoadState("domcontentloaded");
    }
}