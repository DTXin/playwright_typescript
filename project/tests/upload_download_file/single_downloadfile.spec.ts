import {test, expect} from "@playwright/test";
import fs from 'fs';

let URL = "https://the-internet.herokuapp.com/download";


test("Download a Single file and verifying Using Assertion", async ({page}) => {
    await page.goto(URL);
    // Start waiting for download before clicking. Note no await.
    const downloadPromise = page.waitForEvent('download');
    await page.locator('text=test-file.txt').click()
    const download = await downloadPromise;
    const filePath = './project/data/upload_download_file/' + download.suggestedFilename();

    // Wait for the download process to complete and save the downloaded file somewhere.
    await download.saveAs(filePath);

    // Verify file exist in folder
    expect(fs.existsSync(filePath)).toBeTruthy();
})