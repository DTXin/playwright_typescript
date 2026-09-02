import {test, expect} from "@playwright/test";

let URL = "https://the-internet.herokuapp.com/windows";

test("Open New Tab and back to original Page", async ({context}) => {
    // Create a page.
    const page = await context.newPage();
    await page.goto(URL);

    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent('page');
    await page.locator('//a[normalize-space()="Click Here"]').click();
    const newPage = await pagePromise;

    // Wait for the new page to load
    await newPage.waitForLoadState();

    console.log('New Tab --- >>>', await newPage.title());
    // Close the new tab and navigate back to the original page
    await newPage.close();
    // Title of the existing page
    console.log('Existing page --- >>> ', await page.title())
})

test("Open multiple new Tab and back to original Page", async ({page, context}) => {
    await page.goto(URL);

    // Start waiting for new page before clicking. Note no await.
    const pagePromise1 = context.waitForEvent('page');
    await page.locator('//a[normalize-space()="Click Here"]').click();
    const newPage1 = await pagePromise1;

    // Wait for the new page to load
    await newPage1.waitForLoadState();
    console.log('New Tab 1 --- >>>', await newPage1.title());

    // Switch back to original page
    const pagePromise2 = context.waitForEvent('page');
    await page.locator('//a[normalize-space()="Click Here"]').click();
    const newPage2 = await pagePromise2;

    // Wait for the new page to load
    await newPage2.waitForLoadState();
    await newPage2.goto("https://google.com");
    console.log('New Tab 2 --- >>>', await newPage2.title());

    // Close the new tab and navigate back to the original page
    await newPage1.close();
    await newPage2.close();
})