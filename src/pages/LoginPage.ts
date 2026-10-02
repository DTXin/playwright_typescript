import {Page, type Locator} from "@playwright/test";

export class LoginPage {
    // Constructor.
    constructor(private readonly page: Page) {
    }

    /*
     * Locators (use getters for lazy evaluation)
     */
    private get usernameInput(): Locator {
        return this.page.getByRole('textbox', {name: 'Username'});
    }

    private get passwordInput(): Locator {
        return this.page.getByRole('textbox', {name: 'Password'});
    }

    private get loginButton(): Locator {
        return this.page.getByRole('button', {name: 'Login'});
    }


    /*
     * Actions
     */
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}