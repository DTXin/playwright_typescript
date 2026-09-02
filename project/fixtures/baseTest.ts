import {test} from "@playwright/test"
import {ENV} from "../config/env";

test.beforeEach(async ({page}) => {
    await page.goto(ENV.URL);
});