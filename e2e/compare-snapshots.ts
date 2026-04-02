/**
 * Playwright Visual Regression – Snapshot-Vergleichs-Skript
 *
 * Dieses Skript liest Baseline- und Migration-Snapshots aus dem
 * Dateisystem und gibt eine Übersicht aller Differenzen aus.
 *
 * Verwendung:
 *   npx ts-node e2e/compare-snapshots.ts
 *
 * Voraussetzung:
 *   - Baseline-Snapshots in  e2e/snapshots/baseline/
 *   - Migration-Snapshots in e2e/snapshots/migration/
 */
import * as fs from 'fs';
import * as path from 'path';

const BASELINE_DIR = path.join(__dirname, 'snapshots', 'baseline');
const MIGRATION_DIR = path.join(__dirname, 'snapshots', 'migration');
const DIFF_DIR = path.join(__dirname, 'snapshots', 'diff');

function listSnapshots(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { recursive: true })
    .filter((f): f is string => typeof f === 'string' && f.endsWith('.png'))
    .sort();
}

const baseline = listSnapshots(BASELINE_DIR);
const migration = listSnapshots(MIGRATION_DIR);

console.log('\n📸  Visual Regression Snapshot-Vergleich');
console.log('======================================\n');

console.log(`Baseline-Snapshots (master / Angular 15): ${baseline.length}`);
baseline.forEach(f => console.log(`  ✓ ${f}`));

console.log(`\nMigration-Snapshots (Angular 21):        ${migration.length}`);
migration.forEach(f => console.log(`  ✓ ${f}`));

const onlyInBaseline = baseline.filter(f => !migration.includes(f));
const onlyInMigration = migration.filter(f => !baseline.includes(f));
const inBoth = baseline.filter(f => migration.includes(f));

if (onlyInBaseline.length > 0) {
  console.log(`\n⚠️  Nur in Baseline (fehlen in Migration):`);
  onlyInBaseline.forEach(f => console.log(`  - ${f}`));
}

if (onlyInMigration.length > 0) {
  console.log(`\n⚠️  Nur in Migration (neu hinzugefügt):`);
  onlyInMigration.forEach(f => console.log(`  + ${f}`));
}

console.log(`\n✅  In beiden Branches vorhanden: ${inBoth.length}`);
console.log('   (Pixelvergleich erfolgt automatisch durch Playwright beim nächsten Test-Run)');

if (!fs.existsSync(DIFF_DIR)) {
  console.log(`\nHinweis: Diff-Ordner ${DIFF_DIR} existiert noch nicht.`);
  console.log('  Wird automatisch von Playwright befüllt, wenn Tests fehlschlagen.');
}

console.log('\n📝 Befehle:');
console.log('  Baseline erstellen:   npm run test:vrt:baseline');
console.log('  Migration testen:     npm run test:vrt:migration');
console.log('  Alle testen:          npm run test:vrt');
console.log('  Report öffnen:        npx playwright show-report\n');
