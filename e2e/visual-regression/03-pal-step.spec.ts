import { test, expect } from '@playwright/test';
import {
  waitForAngular,
  disableAnimations,
  fillRmrForm,
  navigateToNextStep,
} from '../helpers/app-interactions';

/**
 * Testszenario 3: PAL-Aktivitätslevel-Schritt
 * Navigiert zu Step 2 und vergleicht die Anzeige.
 */
test.describe('PAL Step', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAngular(page);
    await disableAnimations(page);
    // RMR ausfüllen damit "Weiter" aktiv wird
    await fillRmrForm(page, { gender: 'male', ageGroup: '1', weight: '80' });
    await page.waitForTimeout(200);
    await navigateToNextStep(page);
    await page.waitForTimeout(300);
  });

  test('PAL step – initial state', async ({ page }) => {
    await expect(page).toHaveScreenshot('03-pal-step-initial.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('PAL step – radio group', async ({ page }) => {
    const radioGroup = page.locator('mat-radio-group').last();
    await expect(radioGroup).toBeVisible();
    await expect(radioGroup).toHaveScreenshot('03-pal-radio-group.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('PAL step – option selected', async ({ page }) => {
    const radioButton = page.locator('mat-radio-button').filter({ hasText: 'Moderat aktiv' });
    await radioButton.click();
    await page.waitForTimeout(200);
    await expect(page).toHaveScreenshot('03-pal-step-selected.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
