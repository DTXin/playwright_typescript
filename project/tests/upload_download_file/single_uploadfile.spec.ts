import {test, expect} from "@playwright/test";

let URL = "https://www.testmuai.com/selenium-playground/upload-file-demo/";
let FILE = "./project/data/upload_download_file/1784805259419.jpg"

test("Upload a Single file with assertion", async ({page}) => {
    await page.goto(URL);
    await page.setInputFiles('//input[@id="file"]', FILE);
    await expect(page.locator('//div[@id="error"]')).toContainText('File Successfully Uploaded');
})