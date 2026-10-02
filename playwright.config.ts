import {defineConfig, devices} from '@playwright/test';
import {config} from "dotenv";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// ENVIRONMENT = staging ==> reading file '.env.ts.staging'
// ENVIRONMENT = qa      ==> reading file '.env.ts.qa'
if (process.env.ENVIRONMENT) {
    config({
        path: `./env/.env.${process.env.ENVIRONMENT}`,
        override: true
    });
} else {
    config({
        path: `./env/.env`,
        override: true
    });
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ['html'],
        ['allure-playwright'],
    ],
    use: {
        baseURL: "https://restful-booker.herokuapp.com/",
        trace: 'on',
        headless: false,
        launchOptions: {
            slowMo: 2000, // Delays every action (click, type, etc.) by 500ms
        },
        /* Use options at here. See https://playwright.dev/docs/test-use-options */
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                // headless: false,
                screenshot: 'only-on-failure'
            },
        },

        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        //
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.ts.CI,
    // },
});
