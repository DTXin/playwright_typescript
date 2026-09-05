import {Locator, Page} from "@playwright/test";
import {EmployeeDetails} from "../../resource/hrmInterface";

export class AddEmployeePage {
    // Constructor.
    constructor(private readonly page: Page) {}

    /*
     * Locators (use getters for lazy evaluation)
     */
    private get firstnameInput() {
        return this.page.getByRole("textbox", {name: "First Name"});
    }

    private get lastnameInput() {
        return this.page.getByRole("textbox", {name: "Last Name"});
    }

    private get middleNameInput() {
        return this.page.getByRole("textbox", {name: "Middle Name"});
    }

    private get employeeIDInput() {
        return this.page.getByRole("textbox", {name: "Employee ID"});
    }

    private get saveButton() {
        return this.page.getByRole("button", {name: "Sav"});
    }

    public get successMessage() {
        return this.page.getByText(/Successfully Saved/i);
    }

    /*
     * Actions
     */
    async addEmployee(employeeDetails: EmployeeDetails) {
        await this.firstnameInput.fill(employeeDetails.firstName)
        await this.lastnameInput.fill(employeeDetails.lastName)
        await this.middleNameInput.fill(employeeDetails.middleName)
        await this.employeeIDInput.fill(employeeDetails.employeeId)
        await this.saveButton.click();
    }
}