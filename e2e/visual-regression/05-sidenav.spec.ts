import { test, expect } from '@playwright/test';
import { waitForAngular, disableAnimations } from '../helpers/app-interactions';

/**
 * Testszenario 5: Sidenav-Menü
 * Vergleicht das Sidenav im geöffneten und geschlossenen Zustand.
 */
test.describe('Sidenav', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAngular(page);
    await disableAnimations(page);
  });

  test('sidenav – closed (default)', async ({ page }) => {
    await expect(page).toHaveScreenshot('05-sidenav-closed.png', {
      fullPage: false,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('sidenav – opened', async ({ page }) => {
    // Menu-Button klicken
    const menuBtn = page.locator('button[aria-label="Open Sidenav"], button.menu-button').first();
    await menuBtn.click();
    // Warte auf Sidenav-Animation
    await page.waitForTimeout(400);
    await expect(page).toHaveScreenshot('05-sidenav-open.png', {
      fullPage: false,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('sidenav content', async ({ page }) => {
    const menuBtn = page.locator('button[aria-label="Open Sidenav"], button.menu-button').first();
    await menuBtn.click();
    await page.waitForTimeout(400);
    const sidenav = page.locator('mat-sidenav').first();
    await expect(sidenav).toBeVisible();
    await expect(sidenav).toHaveScreenshot('05-sidenav-content.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
