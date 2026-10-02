import {type Locator, Page} from "@playwright/test";

export class LeftMenu {
    // Constructor.
    constructor(private readonly page: Page) {}

    /*
     * Locators (use getters for lazy evaluation)
     */
    private menu(menuName: string): Locator {
        return this.page.getByRole('link', {name: menuName});
    }

    /*
     * Actions
     */
    async selectLeftMenuItem(menuItem: string) {
        await this.menu(menuItem).click();
    }
}