import {test, expect} from '../../lib/fixtures/ui/pageFixtures'
import {ENV} from '../../config/env';
import {getRandomEmployeeDetails} from "../../resource/random";

test('test', async ({loginPage, homePage, addEmployeePage}) => {
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await homePage.getLeftMenu.selectLeftMenuItem("PIM");
    await homePage.getTopMenu.selectTopMenuItem("Add Employee");

    await addEmployeePage.addEmployee(getRandomEmployeeDetails());
    await expect(addEmployeePage.successMessage).toBeVisible();
});