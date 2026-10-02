import {test, expect} from '@playwright/test';
import {ENV} from '../../src/fixtures/environment';

test('has title', async ({ page }) => {
  console.log("URL of local: " + ENV.URL);
  console.log("USERNAME: " + ENV.USERNAME);
  console.log("PASSWORD: " + ENV.PASSWORD);
});