import { LoginPage } from "../../pageObjects/LoginPage/LoginPage";
import { DashboardPage } from '../../pageObjects/DashboardPage/DashboardPage';
import { CartPage } from '../../pageObjects/CartPage/CartPage';
import { OrderPage } from '../../pageObjects/OrderPage/OrderPage';
import { OrderHistoryPage } from '../../pageObjects/OrderHistoryPage/OrderHistoryPage';
import { Page, test as baseTest } from "@playwright/test";
import { CommonScenario } from "../common/CommonScenario";

// declaring the objects type for autocompletion
interface pageObjects {
    loginPage: LoginPage
    dashboardPage: DashboardPage
    cartPage: CartPage
    orderPage: OrderPage
    orderHistoryPage: OrderHistoryPage
    commonScenarioPage: CommonScenario
}

// intializing all the page objects you have in your app
// and import them as fixture in spec file
const test = baseTest.extend<pageObjects> ({

    commonScenarioPage: async ({page}, use, testinfo) => {
        await use(new CommonScenario(page, testinfo));
    },

    loginPage: async ({page, commonScenarioPage}, use) => {
        await use(new LoginPage(page, commonScenarioPage));
    },
    
    dashboardPage: async ({page, commonScenarioPage}, use) => {
        await use(new DashboardPage(page, commonScenarioPage));
    },

    cartPage: async ({page, commonScenarioPage}, use) => {
        await use(new CartPage(page, commonScenarioPage));
    },

    orderPage: async ({page, commonScenarioPage}, use) => {
        await use(new OrderPage(page, commonScenarioPage));
    },

    orderHistoryPage: async ({page, commonScenarioPage}, use) => {
        await use(new OrderHistoryPage(page, commonScenarioPage));
    }
});

// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;