import { test, expect } from '@playwright/test';
import { waitForAngular, disableAnimations } from '../helpers/app-interactions';

/**
 * Testszenario 1: Initialer Seitenlade-Zustand
 * Vergleicht den leeren Zustand der App direkt nach dem Laden.
 */
test.describe('Initial Load', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForAngular(page);
    await disableAnimations(page);
  });

  test('full page – initial state', async ({ page }) => {
    await expect(page).toHaveScreenshot('01-full-page-initial.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('toolbar', async ({ page }) => {
    const toolbar = page.locator('mat-toolbar, [class*="toolbar"]').first();
    await expect(toolbar).toBeVisible();
    await expect(toolbar).toHaveScreenshot('01-toolbar.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('stepper – step 1 header visible', async ({ page }) => {
    const stepper = page.locator('mat-stepper, mat-horizontal-stepper').first();
    await expect(stepper).toBeVisible();
    await expect(stepper).toHaveScreenshot('01-stepper-initial.png', {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });

  test('mobile – full page', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page).toHaveScreenshot('01-mobile-initial.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    });
  });
});
