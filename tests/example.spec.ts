import { test } from '@playwright/test';

// push this to github ticket
test.describe('DOB field', () => {
    test('DOB field with fill method', async ({ page }) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_date');
        await page.click('#accept-choices')
        await page.waitForSelector('#iframeResult');
        await page.frameLocator('#iframeResult').locator('[type=date]').fill('01011990');
        await page.frameLocator('#iframeResult').locator('input[type="submit"]').click();
    });

    test('DOB field with pressSequentially method', async ({ page }) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_date');
        await page.click('#accept-choices')
        await page.waitForSelector('#iframeResult');
        await page.frameLocator('#iframeResult').locator('[type=date]').pressSequentially('01011990');
        await page.frameLocator('#iframeResult').locator('input[type="submit"]').click();
    });
});
