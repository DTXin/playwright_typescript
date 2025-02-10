import { expect, Page } from "@playwright/test";
import { locators } from '../OrderHistoryPage/OrderHistoryPageLocators';
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";

export class OrderHistoryPage extends CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async verifyOrderIdDisplayed() {
        let orderFound = false;
        // const orderID = this.getValue("orderId")!;
        const orderID = "67a73145e2b53b1f4d04a2";

        // Get all row in table
        await this.page.waitForSelector('tbody');
        const all_row = await this.page.locator(locators.rows).all();

        // Search and verify orderID in
        for (const row of all_row) {
            const matchOrderId = await row.locator("th[scope='row']").textContent();
            if (orderID.includes(matchOrderId!)) {
                orderFound = true;
                break;
            }
        }

        expect(orderFound).toBeTruthy();
        this.takeScreenshot("Order History Page");
    }
}