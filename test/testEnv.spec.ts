import test, { expect } from '@playwright/test';

test('Order a product from website', async ({ page}, testinfo) => {
    await page.goto('/');
});