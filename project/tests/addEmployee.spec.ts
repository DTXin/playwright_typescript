import {test, expect} from '../fixtures/pageFixtures'
import {ENV} from '../config/env';
import {getRandomEmployeeDetails} from "../data/random";

test('test', async ({page, loginPage, homePage, addEmployeePage}) => {
    await page.goto(ENV.URL);
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await homePage.getLeftMenu.selectLeftMenuItem("PIM");
    await homePage.getTopMenu.selectTopMenuItem("Add Employee");

    await addEmployeePage.addEmployee(getRandomEmployeeDetails());
    await expect(addEmployeePage.successMessage).toBeVisible();
});