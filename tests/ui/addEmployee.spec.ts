import {test, expect} from '../../src/fixtures/ui/pageFixtures'
import {ENV} from '../../src/fixtures/environment';
import {getRandomEmployeeDetails} from "../../tests-data/random";

test('test', async ({loginPage, homePage, addEmployeePage}) => {
    await loginPage.login(ENV.USERNAME, ENV.PASSWORD);

    await homePage.getLeftMenu.selectLeftMenuItem("PIM");
    await homePage.getTopMenu.selectTopMenuItem("Add Employee");

    await addEmployeePage.addEmployee(getRandomEmployeeDetails());
    await expect(addEmployeePage.successMessage).toBeVisible();
});