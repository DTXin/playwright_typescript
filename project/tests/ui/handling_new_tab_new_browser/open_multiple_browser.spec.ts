import {test} from "@playwright/test";

test.setTimeout(60000);

test("Browser Context example", async ({browser}) => {
    //First Context - Open Page in New Browser
    const firstContext = await browser.newContext();
    const firstPage = await firstContext.newPage();
    await firstPage.goto("https://automationexercise.com/login");
    await firstPage.locator('input[data-qa="login-email"]').fill("ncrmeet1@yopmail.com");
    await firstPage.locator('input[placeholder="Password"]').fill("Test@1234");
    await firstPage.locator('button[data-qa="login-button"]').click();

    //Second Context -- Open Page in New Browser
    const secondContext = await browser.newContext();
    const secondPage = await secondContext.newPage();
    await secondPage.bringToFront();
    await secondPage.goto("https://automationexercise.com/login");
    await secondPage.locator('input[data-qa="login-email"]').fill("ncrmeet1@yopmail.com");
    await secondPage.locator('input[placeholder="Password"]').fill("Test@1234");
    await secondPage.locator('button[data-qa="login-button"]').click();

    await firstPage.bringToFront();
    await firstPage.locator('//a[@href="/products"]').click();
    console.log('Title of first page --- >>>', await firstPage.title());

    await secondPage.bringToFront();
    console.log('Title of second page --- >>>', await secondPage.title());

    await firstPage.pause();
    await secondPage.pause();
    await firstPage.close();
    await secondPage.close();
    await firstContext.close();
    await secondContext.close();
})