import { test, expect, Page } from "@playwright/test";
import { CommonScenario } from "./CommonScenario";

export class CommonPage {

    constructor(public page: Page, readonly scenario: CommonScenario) {
    }

    public setValue(key: string, value: string) {
        this.scenario.setValue(key, value);
    }

    public getValue(key: string) {
        const value = this.scenario.getValue(key);
        return value;
    }

    async takeScreenshot(name: string) {
        await this.scenario.takeScreenshot(name);
    }
}