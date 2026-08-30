import {type Locator, Page} from "@playwright/test";
import {LeftMenu} from "./Menu/LeftMenu";
import {TopMenu} from "./Menu/TopMenu";

export class HomePage {
    private leftMenu: LeftMenu;
    private topMenu: TopMenu;

    // Constructor.
    constructor(private readonly page: Page) {
        this.leftMenu = new LeftMenu(page);
        this.topMenu = new TopMenu(page);
    }

    /*
     * Locators (use getters for lazy evaluation)
     */
    get getLeftMenu() {
        return this.leftMenu;
    }

    get getTopMenu() {
        return this.topMenu;
    }

    /*
     * Actions
     */

}