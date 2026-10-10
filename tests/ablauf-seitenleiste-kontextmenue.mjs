// Reiselogbuch-Test: ablauf-seitenleiste-kontextmenue – Aufruf im Repo-Ordner: node tests/ablauf-seitenleiste-kontextmenue.mjs (Bildschirmfotos landen in tests/out/)
import { chromium } from 'playwright';
const trips = [{ id: 'a', title: 'Australien', participants: 'G', start: '2026-08-24', end: '2026-11-11', transport: ['flug'], days: {} },
  { id: 'b', title: 'Toskana', participants: 'G', start: '2027-05-03', end: '2027-05-17', transport: ['pkw'], days: {} },
  { id: 'c', title: 'Wien Kurztrip', participants: 'G', start: '2026-03-12', end: '2026-03-15', transport: ['zug'], days: {} }];
const b = await chromium.launch(); const errs = [];
const p = await b.newPage({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 2, hasTouch: true }); p.on('pageerror', e => errs.push(e.message));
await p.clock.setFixedTime(new Date('2026-08-27T14:32:00'));
await p.goto(new URL('../index.html', import.meta.url).href);
await p.evaluate(t => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: { theme: 'light', lastBackup: Date.now() }, trips: t })), trips);
await p.reload(); await p.waitForTimeout(300);
const row = name => p.locator('.side-row', { hasText: name });
const long = async name => { const bx = await row(name).boundingBox(); await p.mouse.move(bx.x + 40, bx.y + 20); await p.mouse.down(); await p.waitForTimeout(750); await p.mouse.up(); await p.waitForTimeout(150); };
// short tap opens
await row('Wien').click(); console.log('tap opens', await p.textContent('.nb-title'));
await long('Toskana');
console.log('menu', await p.locator('.menu .mi').allTextContents(), 'still', await p.textContent('.nb-title'), 'row on', await row('Toskana').evaluate(e => e.classList.contains('on')));
await p.screenshot({ path: new URL('out/R22-1-kontextmenue.png', import.meta.url).pathname });
await p.click('.menu .mi:has-text("Einstellungen")'); console.log('dlg', await p.textContent('#dlg h3'), await p.inputValue('#fTitle'));
await p.click('#dlgX'); await p.waitForTimeout(200); console.log('after x', await p.evaluate(() => [dlg.open, side.hidden, side.querySelectorAll('.side-row').length, document.querySelectorAll('.pop').length]));
await long('Toskana'); console.log('no Öffnen', await p.locator('.menu .mi:has-text("Öffnen")').count()); await p.mouse.click(1170, 810); await p.waitForTimeout(150);
await long('Wien'); await p.click('.menu .mi:has-text("Reiselogbuch löschen")'); await p.waitForTimeout(150);
console.log('pop', await p.locator('.pop button').allTextContents(), 'row on', await row('Wien').evaluate(e => e.classList.contains('on')));
await p.screenshot({ path: new URL('out/R22-2-loeschen.png', import.meta.url).pathname });
await p.click('.pop button:has-text("Reiselogbuch löschen")'); console.log('trips', await p.evaluate(() => db.trips.map(t => t.title)), 'now', await p.textContent('.nb-title'));
await p.click('#sideMore'); console.log('notes', await p.locator('.menu .note').allTextContents());
await p.screenshot({ path: new URL('out/R22-3-seitenleiste-menue.png', import.meta.url).pathname });
console.log('ERR', errs); await b.close();
