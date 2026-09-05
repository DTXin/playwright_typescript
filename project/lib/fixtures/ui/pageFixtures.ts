import {test as base} from "@playwright/test"
import {LoginPage} from "../../../pages/LoginPage";
import {HomePage} from "../../../pages/HomePage";
import {AddEmployeePage} from "../../../pages/PIM/AddEmployeePage";

// Declaring the objects type for autocompletion.
interface PageObject {
    loginPage: LoginPage;
    homePage: HomePage;
    addEmployeePage: AddEmployeePage;
}

// Initializing all the page objects you have in your app and import them as fixture in spec file.
export const test = base.extend<PageObject>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },

    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },

    addEmployeePage: async({page}, use) => {
        await use(new AddEmployeePage(page));
    }
})

export {expect} from "@playwright/test"