import {test} from "@playwright/test"
import {ENV} from "../../fixtures/environment";

test.beforeEach(async ({page}) => {
    await page.goto(ENV.URL);
});