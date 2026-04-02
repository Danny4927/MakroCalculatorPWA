import { Page } from '@playwright/test';

/**
 * Wartet bis Angular (15 oder 21) stabil ist.
 * Funktioniert mit beiden Bootstrap-Varianten.
 */
export async function waitForAngular(page: Page): Promise<void> {
  // Warte auf Angular-Root-Element
  await page.waitForSelector('app-root', { state: 'attached', timeout: 15_000 });

  // Warte bis keine pending XHR/fetch requests mehr laufen
  await page.waitForLoadState('networkidle');

  // Zusätzlicher Tick für zoneless CD (Signal-Updates)
  await page.evaluate(() => {
    return new Promise<void>(resolve => setTimeout(resolve, 100));
  });
}

/**
 * Deaktiviert CSS-Animationen und -Transitions für stabile Screenshots.
 * Hängt ein <style>-Tag in den DOM.
 */
export async function disableAnimations(page: Page): Promise<void> {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      .mat-mdc-progress-spinner,
      .mdc-circular-progress {
        display: none !important;
      }
    `
  });
}

/**
 * Füllt das RMR-Formular im ersten Stepper-Schritt aus.
 */
export async function fillRmrForm(
  page: Page,
  opts: { gender: 'male' | 'female'; ageGroup: '0' | '1' | '2' | '3'; weight: string }
): Promise<void> {
  const genderLabel = opts.gender === 'male' ? 'männlich' : 'weiblich';
  const ageLabels: Record<string, string> = {
    '0': '10', // matches "10-18"
    '1': '19', // matches "19-30"
    '2': '31', // matches "31-60"
    '3': '>60' // matches ">60"
  };

  // Geschlecht auswählen
  const genderBtn = page
    .locator('mat-radio-button')
    .filter({ hasText: genderLabel })
    .first();
  await genderBtn.click();

  // Altersgruppe auswählen
  const ageBtn = page
    .locator('mat-radio-button')
    .filter({ hasText: ageLabels[opts.ageGroup] })
    .first();
  await ageBtn.click();

  // Gewicht eingeben
  const weightInput = page.locator('input[type="number"], input[placeholder*="Gewicht"]').first();
  await weightInput.clear();
  await weightInput.fill(opts.weight);
  await weightInput.dispatchEvent('change');
  await weightInput.dispatchEvent('input');
}

/**
 * Klickt den "Weiter"-Button im aktuellen Stepper-Schritt.
 */
export async function navigateToNextStep(page: Page): Promise<void> {
  const nextBtn = page
    .locator('button[matsternext], button')
    .filter({ hasText: /Weiter/i })
    .first();
  await nextBtn.click();
}

/**
 * Wählt eine PAL-Option im zweiten Schritt.
 */
export async function selectPalOption(page: Page, label: string): Promise<void> {
  const radioBtn = page
    .locator('mat-radio-button')
    .filter({ hasText: label })
    .first();
  await radioBtn.click();
}
