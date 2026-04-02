import { test, expect } from '@playwright/test';
import {
  waitForAngular,
  disableAnimations,
  fillRmrForm,
  navigateToNextStep,
  selectPalOption,
} from '../helpers/app-interactions';

/**
 * Testszenario 4: Ergebnis-Schritt (TDEE-Anzeige)
 * Dieser Test ist der kritischste: Er prüft, ob die Signal-Migration
 * die berechneten Werte korrekt anzeigt.
 */
test.describe('Result Step', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAngular(page);
    await disableAnimations(page);

    // Schritt 1: RMR
    await fillRmrForm(page, { gender: 'male', ageGroup: '1', weight: '80' });
    await page.waitForTimeout(300);
    await navigateToNextStep(page);
    await page.waitForTimeout(300);

    // Schritt 2: PAL
    await selectPalOption(page, 'Moderat aktiv');
    await page.waitForTimeout(300);
    await navigateToNextStep(page);
    await page.waitForTimeout(300);
  });

  test('result step – TDEE displayed', async ({ page }) => {
    await expect(page).toHaveScreenshot('04-result-full-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('result component – values', async ({ page }) => {
    const result = page.locator('app-result').first();
    await expect(result).toBeVisible();
    await expect(result).toHaveScreenshot('04-result-component.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('result – tdee value is a number', async ({ page }) => {
    // Funktionaler Test: Prüft ob ein Zahlenwert angezeigt wird
    const tdeeText = await page.locator('app-result, .mat-h2').last().textContent();
    expect(tdeeText).toMatch(/\d/);
  });

  test('mobile – result step', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page).toHaveScreenshot('04-mobile-result.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
