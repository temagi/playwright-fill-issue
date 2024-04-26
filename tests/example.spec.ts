import { expect, test } from '@playwright/test';

// push this to github ticket
test.describe('DOB field', () => {
    test('Date field with fill method', async ({ page }) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_date');
        await page.click('#accept-choices')
        await page.waitForSelector('#iframeResult');
        await page.frameLocator('#iframeResult').locator('[type=date]').fill('01/01/1990');
        await page.frameLocator('#iframeResult').locator('input[type="submit"]').click();
        await expect(page.frameLocator('#iframeResult').locator('.w3-container.w3-large.w3-border')).toBeVisible();
        await expect(page.frameLocator('#iframeResult').locator('.w3-container.w3-large.w3-border')).toContainText('birthday=1990-01-01 ');
    });

    test('Date field with pressSequentially method', async ({ page }) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_date');
        await page.click('#accept-choices')
        await page.waitForSelector('#iframeResult');
        await page.frameLocator('#iframeResult').locator('[type=date]').pressSequentially('01011990');
        await page.frameLocator('#iframeResult').locator('input[type="submit"]').click();
        await expect(page.frameLocator('#iframeResult').locator('.w3-container.w3-large.w3-border')).toBeVisible();
        await expect(page.frameLocator('#iframeResult').locator('.w3-container.w3-large.w3-border')).toContainText('birthday=1990-01-01 ');
    });

    test('Date field with type method', async ({ page }) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_date');
        await page.click('#accept-choices')
        await page.waitForSelector('#iframeResult');
        await page.frameLocator('#iframeResult').locator('[type=date]').type('01011990');
        await page.frameLocator('#iframeResult').locator('input[type="submit"]').click();
        await expect(page.frameLocator('#iframeResult').locator('.w3-container.w3-large.w3-border')).toBeVisible();
        await expect(page.frameLocator('#iframeResult').locator('.w3-container.w3-large.w3-border')).toContainText('birthday=1990-01-01 ');
    });
});
