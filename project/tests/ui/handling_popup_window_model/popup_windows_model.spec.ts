import {test} from "@playwright/test";

let URL = "https://www.testmuai.com/selenium-playground/window-popup-modal-demo/";

test("Click on Twitter Button to open Window Based Popup", async ({page}) => {
    await page.goto(URL);
    const windowPopup = page.waitForEvent("popup");
    await page.locator("[title='Follow @testmuai on Twitter']").click();
    const twitterPopup = await windowPopup;

    // Print title of window popup
    console.log('Title of the Pop Up is ', await twitterPopup.title());
    await twitterPopup.close()
    // Print title of existing page
    console.log('Title of existing page ',await page.title());
})

test("Click on Facebook Button to open Window Based Popup", async ({page}) => {
    await page.goto(URL);
    const windowPopup = page.waitForEvent("popup");
    await page.locator("[title='Follow @testmuai on Facebook']").click();
    const twitterPopup = await windowPopup;

    // Print title of window popup
    console.log('Title of the Pop Up is ', await twitterPopup.title());
    await twitterPopup.close()
    // Print title of existing page
    console.log('Title of existing page ',await page.title());
})