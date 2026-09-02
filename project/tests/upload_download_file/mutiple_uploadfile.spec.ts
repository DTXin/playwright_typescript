import {test, expect} from "@playwright/test";

let URL = "https://blueimp.github.io/jQuery-File-Upload/";
let FILE1 = "./project/data/upload_download_file/1784805259419.jpg";
let FILE2 = "./project/data/upload_download_file/Docker file.jpg";

test("Upload multiple file with assertion", async ({page}) => {
    await page.goto(URL);
    await page.setInputFiles('//input[@type="file"]', [FILE1, FILE2]);
    await expect(page.locator('p.name').nth(0)).toHaveText('1784805259419.jpg')
    await expect(page.locator('p.name').nth(1)).toHaveText('Docker file.jpg')
})