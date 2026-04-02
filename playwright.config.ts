import { defineConfig, devices } from '@playwright/test';

/**
 * Visual Regression Test Configuration
 *
 * Two Playwright "projects" (= Test-Umgebungen):
 *   baseline   → läuft gegen den master-Branch (Angular 15)
 *   migration  → läuft gegen den feat/angular21-migration-Branch (Angular 21)
 *
 * Workflow:
 *   1. npm run test:vrt:update  – Baseline-Screenshots erstellen (einmalig auf master)
 *   2. npm run test:vrt         – Screenshots vergleichen (auf migration-Branch)
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 1 : 0,
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list']
  ],

  use: {
    /* Animationen deaktivieren für stabile Screenshots */
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    screenshot: 'only-on-failure',
    video: 'off',
  },

  projects: [
    {
      name: 'baseline',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env['BASELINE_URL'] ?? 'http://localhost:4200',
        viewport: { width: 1280, height: 800 },
      },
      testMatch: '**/visual-regression/**/*.spec.ts',
      snapshotDir: 'e2e/snapshots/baseline',
    },
    {
      name: 'migration',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env['MIGRATION_URL'] ?? 'http://localhost:4201',
        viewport: { width: 1280, height: 800 },
      },
      testMatch: '**/visual-regression/**/*.spec.ts',
      snapshotDir: 'e2e/snapshots/migration',
    },
    /* Mobile Viewports */
    {
      name: 'baseline-mobile',
      use: {
        ...devices['Pixel 7'],
        baseURL: process.env['BASELINE_URL'] ?? 'http://localhost:4200',
      },
      testMatch: '**/visual-regression/**/*.spec.ts',
      snapshotDir: 'e2e/snapshots/baseline-mobile',
    },
    {
      name: 'migration-mobile',
      use: {
        ...devices['Pixel 7'],
        baseURL: process.env['MIGRATION_URL'] ?? 'http://localhost:4201',
      },
      testMatch: '**/visual-regression/**/*.spec.ts',
      snapshotDir: 'e2e/snapshots/migration-mobile',
    },
  ],
});
