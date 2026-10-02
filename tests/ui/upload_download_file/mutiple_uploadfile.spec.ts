import {test, expect} from "@playwright/test";

let URL = "https://blueimp.github.io/jQuery-File-Upload/";
let FILE1 = "./project/data/upload_download_file/File1.jpg";
let FILE2 = "./project/data/upload_download_file/File2.jpg";

test("Upload multiple file with assertion", async ({page}) => {
    await page.goto(URL);
    await page.setInputFiles('//input[@type="file"]', [FILE1, FILE2]);
    await expect(page.locator('p.name').nth(0)).toHaveText('File1.jpg')
    await expect(page.locator('p.name').nth(1)).toHaveText('File2.jpg')
})