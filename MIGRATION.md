# Migration: Angular 15 → Angular 21

## Übersicht der Änderungen

Dieser Branch migriert das Projekt von Angular 15 auf Angular 21 und setzt moderne Standards um.

## Was wurde geändert?

### Architektur
- **NgModule entfernt**: `AppModule`, `AppRoutingModule` und `EnergyModule` wurden durch `bootstrapApplication()` und Standalone Components ersetzt
- **Standalone Components**: Alle Komponenten haben `standalone: true` und deklarieren ihre eigenen `imports`
- **App Config**: Neue `app.config.ts` mit `provideZonelessChangeDetection()`, `provideRouter()`, `provideAnimationsAsync()` und `provideServiceWorker()`
- **Routing**: `app.routes.ts` als einfaches `Routes`-Array statt `RouterModule`

### Change Detection
- **Zone.js entfernt**: `zone.js` wurde aus den Dependencies entfernt
- **Zoneless CD**: `provideZonelessChangeDetection()` in `app.config.ts` aktiviert
- **Signals statt mutable Properties**: `CalculationService` nutzt `signal()`, `computed()` für reaktiven State

### Test-Framework
- **Karma/Jasmine → Vitest**: `karma.conf.js`, `test.ts`, `jasmine-core` und zugehörige Pakete entfernt
- **`vitest.config.ts`**: Neue Vitest-Konfiguration mit jsdom und Coverage via v8
- **Test-Syntax**: Alle Specs nutzen `describe/it/expect` von Vitest (kompatibel mit Jasmine-API)
- **`provideZonelessChangeDetection()`** in jedem `TestBed`

### Build
- **Builder**: `@angular-devkit/build-angular:browser` → `@angular-devkit/build-angular:application` (Esbuild/Vite)
- **Kein `polyfills.ts`** mehr notwendig
- **Budget-Werte** auf realistischere Angular-21-Standards angepasst

### Angular Material
- **Legacy-Importe entfernt**: `MatLegacyButtonModule`, `MatLegacyCardModule` etc. durch aktuelle Module ersetzt
- Alle Material-Module direkt in der jeweiligen Standalone Component importiert

### TypeScript
- **strict mode** aktiviert (`"strict": true`)
- `moduleResolution: "bundler"` für Vite/Esbuild-Kompatibilität
- `useDefineForClassFields: false` beibehalten (Angular-Requirement)

### Templates
- **`@if` Control Flow**: `*ngIf` in Templates durch neuen `@if`-Syntax ersetzt
- **Signal-Bindings**: `service.rmr()` statt `service.rmr` in Templates

### Tooling
- **TSLint + Codelyzer entfernt** → ESLint mit `@angular-eslint`
- **Protractor entfernt** (deprecated)

## Nächste Schritte nach dem Merge

1. `npm install` ausführen
2. `ng test` – alle Vitest-Tests prüfen
3. `ng build` – Build mit neuem Application-Builder prüfen
4. `ng lint` – ESLint-Konfiguration final anpassen
5. `LandingPageComponent`-Template und `SidenavMenuComponent`-Template aus altem Code übernehmen (wurden nicht verändert)
