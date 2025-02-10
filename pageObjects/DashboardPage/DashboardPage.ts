import { expect, Page } from "@playwright/test";
import { locators } from '../DashboardPage/DasboardPageLocators';
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";

export class DashboardPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async clickAddToCart(productName: string) {
        const product = this.page.locator(locators.products, {hasText: productName});
        await product.waitFor({state: "visible"});

        const addToCartButton = product.locator(locators.addToCartButton);
        expect(addToCartButton, "Add to cart button is visible").toBeTruthy();

        const AddToCartButtonVisible = await addToCartButton.isVisible();
        if (AddToCartButtonVisible) {
            await addToCartButton.click();
        }
    }

    async navigateToCart() {
        await this.page.locator(locators.cart).click();
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForLoadState("domcontentloaded")
    }

    
    async navigateToOrder() {
        await this.page.locator(locators.order).click();
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForLoadState("domcontentloaded")
    }

    async verifyProducAddedToCartSuccesfull(textPopup: string) {
        await expect(this.page.getByRole('alert', {name: textPopup})).toBeVisible();
    }
}