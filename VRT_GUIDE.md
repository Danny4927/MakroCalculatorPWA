# Visual Regression Tests – Anleitung

Dieser Branch enthält Playwright-Visual-Regression-Tests, die Screenshots der App
bei Angular 15 (master) und Angular 21 (migration) automatisch vergleichen.

## Voraussetzungen

```bash
npm install
npx playwright install chromium
```

Zusätzliches Paket für den lokalen Dev-Server:
```bash
npm install --save-dev serve @playwright/test
```

---

## Schnellstart: Lokaler Vergleich

### Schritt 1 – Baseline erstellen (einmalig auf master)

```bash
# Angular 15 (master) bauen und starten
git checkout master
npm ci
npx ng serve --port 4200 &

# Baseline-Screenshots erstellen
BASELINE_URL=http://localhost:4200 \
npx playwright test --project=baseline --update-snapshots
```

### Schritt 2 – Migration testen

```bash
# Angular 21 (migration-Branch) starten
git checkout feat/angular21-migration
npm ci
npx ng serve --port 4201 &

# Vergleich laufen lassen
MIGRATION_URL=http://localhost:4201 \
npx playwright test --project=migration
```

### Schritt 3 – Report ansehen

```bash
npx playwright show-report
```

---

## Testszenarien

| Datei | Szenario | Screenshots |
|---|---|---|
| `01-initial-load.spec.ts` | Seite nach dem Laden | Full page, Toolbar, Stepper, Mobile |
| `02-rmr-step.spec.ts` | RMR-Formular leer / ausgefüllt | RMR-Card, Full page |
| `03-pal-step.spec.ts` | PAL-Auswahl (Step 2) | PAL-Schritt, Radio-Group, selektiert |
| `04-result-step.spec.ts` | TDEE-Ergebnis (Step 3) | Full page, Result-Component, Mobile |
| `05-sidenav.spec.ts` | Sidenav auf/zu | Geschlossen, geöffnet, Inhalt |

---

## Toleranzschwelle

Alle Tests verwenden `maxDiffPixelRatio: 0.02` (2 % Pixelabweichung erlaubt).
Dies deckt sub-pixel-Rendering-Unterschiede ab, ohne echte visuelle Regression zu maskieren.

Um die Schwelle anzupassen:
```typescript
// In der .spec.ts-Datei
await expect(page).toHaveScreenshot('name.png', {
  maxDiffPixelRatio: 0.01, // strenger
  maxDiffPixels: 100,      // oder absoluter Pixelwert
});
```

---

## Snapshots aktualisieren

Wenn eine visuelle Änderung **bewusst** ist (z. B. Material Design Update), Snapshot manuell aktualisieren:

```bash
npx playwright test --project=migration --update-snapshots
```

---

## CI/CD (GitHub Actions)

Der Workflow `.github/workflows/visual-regression.yml` läuft automatisch auf jedem PR gegen `master`:

1. Baut `master` → startet auf Port 4200 → erstellt Baseline-Snapshots
2. Baut `feat/angular21-migration` → startet auf Port 4201 → vergleicht gegen Baseline
3. Lädt HTML-Report als GitHub-Artefakt hoch (14 Tage)
4. Lädt Diff-Screenshots hoch wenn Tests scheitern

---

## Ordnerstruktur

```
e2e/
├── visual-regression/
│   ├── 01-initial-load.spec.ts    # Seitenlade-Zustand
│   ├── 02-rmr-step.spec.ts        # RMR-Formular
│   ├── 03-pal-step.spec.ts        # PAL-Schritt
│   ├── 04-result-step.spec.ts     # TDEE-Ergebnis
│   └── 05-sidenav.spec.ts         # Sidenav
├── helpers/
│   └── app-interactions.ts        # Wiederverwendbare Interaktions-Helpers
├── compare-snapshots.ts         # CLI-Script für Snapshot-Übersicht
└── snapshots/
    ├── baseline/                  # Angular 15 Screenshots
    ├── migration/                 # Angular 21 Screenshots
    ├── baseline-mobile/           # Mobile Baseline
    └── migration-mobile/          # Mobile Migration
```
