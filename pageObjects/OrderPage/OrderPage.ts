import { expect, Page } from "@playwright/test";
import { locators } from '../OrderPage/OrderPageLocators';
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";

export class OrderPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async searchCountryAndSelect(countryCode: string, countryName: string) {
        await this.page.locator(locators.country).pressSequentially(countryCode);
        await this.page.locator(locators.dropdown).waitFor();

        const optionLocator = this.page.locator(locators.dropdown).locator("button")
        const optionCount = await optionLocator.count();
        for (let i = 0; i < optionCount; ++i) {
            const text = await optionLocator.nth(i).textContent();
            if (text?.trim() === countryName) {
                await optionLocator.nth(i).click();
                break;
            }
        }
    }

    async placeOrder() {
        await this.page.locator(locators.submit).click();
        await this.page.waitForLoadState("domcontentloaded");
    }

    async getOrderID() {
        const orderID = await this.page.locator(locators.orderID).textContent();
        this.setValue("orderId", orderID!);
    }

    async verifyOrderSuccessfully() {
        await expect(this.page.locator(locators.orderConfirmationText)).toHaveText(" Thankyou for the order. ");
    }
}