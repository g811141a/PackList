// Reiselogbuch-Test: tastatur – Aufruf im Repo-Ordner: node tests/tastatur.mjs (Bildschirmfotos landen in tests/out/)
import { chromium } from 'playwright';
const days = { '2026-08-25': { weather: '🌤', program: 'Weiterfahrt nach Sydney', comment: '😊 Oper', food: '👍 Fisch', quarter: 'Cambridge Hotel', place: 'Sydney' } };
const b = await chromium.launch(); const errs = [];
const p = await b.newPage({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 2 }); p.on('pageerror', e => errs.push(e.message));
await p.goto(new URL('../index.html', import.meta.url).href);
await p.evaluate(d => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: { theme: 'light' }, trips: [{ id: 'a', title: 'Australien', participants: 'X', start: '2026-08-24', end: '2026-11-11', transport: ['flug'], foodColumn: true, days: d }] })), days);
await p.reload(); await p.waitForTimeout(300);
const box = () => p.evaluate(() => { const d = dlg.getBoundingClientRect(), h = dlg.querySelector('.dlg-head').getBoundingClientRect(); return { dlgTop: Math.round(d.top), dlgBottom: Math.round(d.bottom), headTop: Math.round(h.top), vh: innerHeight }; });
for (const [name, fn] of [['Tageserfassung', () => openDayDialog(db.trips[0], '2026-08-25')], ['Einstellungen', () => openTripDialog(db.trips[0])]]) {
  await p.setViewportSize({ width: 1180, height: 820 }); await p.evaluate(fn); await p.waitForTimeout(200);
  console.log(name, 'ohne Tastatur', await box());
  await p.setViewportSize({ width: 1180, height: 420 }); await p.waitForTimeout(200);   // Tastatur offen: sichtbarer Bereich 420 px
  console.log(name, 'mit Tastatur ', await box());
  await p.screenshot({ path: new URL(`out/kbd-${name}.png`, import.meta.url).pathname });
  await p.evaluate(() => dlg.close());
}
console.log('ERR', errs); await b.close();
