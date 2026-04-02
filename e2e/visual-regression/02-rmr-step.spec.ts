import { test, expect } from '@playwright/test';
import { waitForAngular, disableAnimations, fillRmrForm } from '../helpers/app-interactions';

/**
 * Testszenario 2: RMR-Berechnungsschritt
 * Prüft das Formular und die Anzeige des berechneten RMR-Wertes.
 */
test.describe('RMR Step', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAngular(page);
    await disableAnimations(page);
  });

  test('RMR step – empty form', async ({ page }) => {
    const rmrCard = page.locator('app-rmr-step mat-card, mat-card').first();
    await expect(rmrCard).toBeVisible();
    await expect(rmrCard).toHaveScreenshot('02-rmr-card-empty.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('RMR step – with calculated value', async ({ page }) => {
    await fillRmrForm(page, { gender: 'male', ageGroup: '1', weight: '80' });
    // Warte auf Signal/CD-Update
    await page.waitForTimeout(200);
    const rmrCard = page.locator('app-rmr-step mat-card, mat-card').first();
    await expect(rmrCard).toHaveScreenshot('02-rmr-card-filled.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('RMR step – full page with calculated value', async ({ page }) => {
    await fillRmrForm(page, { gender: 'female', ageGroup: '2', weight: '65' });
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('02-rmr-full-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
