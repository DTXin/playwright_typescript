import {type Locator, Page} from "@playwright/test";

export class TopMenu {
    // Constructor.
    constructor(private readonly page: Page) {}

    /*
     * Locators (use getters for lazy evaluation)
     */
    private topMenu(menuName: string): Locator {
        return this.page.getByRole('link', {name: menuName});
    }

    /*
     * Actions
     */
    async selectTopMenuItem(menuItem: string) {
        await this.topMenu(menuItem).click();
    }
}