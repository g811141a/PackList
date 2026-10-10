// Reiselogbuch-Test: ablauf-iphone – Aufruf im Repo-Ordner: node tests/ablauf-iphone.mjs (Bildschirmfotos landen in tests/out/)
// iPhone-Ansicht (AppDesign html.phone): Startliste, Reiselogbuch öffnen, Suche unten, Tag erfassen und speichern,
// Blättern, Kontextmenü, Löschen zurück zur Startliste, neues Reiselogbuch, Wechsel iPhone ↔ iPad.
import { chromium } from 'playwright';
const APP = new URL('../index.html', import.meta.url).href;
const OUT = new URL('./out/', import.meta.url).pathname;
const trips = [
  { id: 'a', title: 'Australien', participants: 'Anna', start: '2026-08-24', end: '2026-09-05', transport: ['flug'], foodColumn: true, moodColumn: true, quarterColumn: true,
    days: { '2026-08-24': { weather: '☀️', program: 'Ankunft Sydney', comment: '🙂 super', quarter: 'Hotel Rocks', place: 'Sydney' } } },
  { id: 'b', title: 'Toskana', participants: 'Anna', start: '2027-05-03', end: '2027-05-17', transport: ['pkw'], days: {} },
];
const errors = [];
const check = (ok, text) => { if (!ok) errors.push(text); };
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 393, height: 852 }, hasTouch: true, isMobile: true });
p.on('pageerror', e => errors.push(e.message));
await p.clock.setFixedTime(new Date('2026-08-27T14:32:00'));
await p.goto(APP);
await p.evaluate(t => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: {}, trips: t })), trips);
await p.reload(); await p.waitForTimeout(300);
const db = () => p.evaluate(() => JSON.parse(localStorage.getItem('reiselogbuch.v1')));

check(await p.evaluate(() => document.documentElement.classList.contains('phone')), 'html.phone fehlt');
check(await p.locator('.ltitle').textContent() === 'Australien', 'Start nicht im laufenden Reiselogbuch');
check(await p.locator('#side').isHidden(), 'Seitenleiste sichtbar');
check(await p.locator('#pdays .box.gap').count() === 1, 'erster offener Tag nicht markiert');
check(await p.locator('#searchEnd').isHidden() && await p.locator('#sclear').isHidden(), 'Such-x sichtbar ohne Suche');

// Suche unten: Feld behält den Fokus, Kästen gefiltert, x beendet
await p.click('#search'); await p.keyboard.type('Rocks'); await p.waitForTimeout(150);
check(await p.locator('#pdays .box').count() === 1, 'Suche filtert nicht');
check(await p.evaluate(() => document.activeElement?.id === 'search'), 'Suchfeld verliert den Fokus');
check((await p.locator('.found span').textContent()) === '1 gefunden', 'Anzahl der Treffer fehlt');
check(await p.locator('#prest').isHidden(), 'Fazit beim Suchen sichtbar');
await p.click('#sclear'); check(await p.locator('#search').inputValue() === '', 'ⓧ leert nicht');
await p.click('#searchEnd'); await p.waitForTimeout(150);
check(await p.locator('#searchEnd').isHidden(), 'Suche nicht beendet');
await p.screenshot({ path: OUT + 'iphone-1-reiselogbuch.png' });

// Tag erfassen: bildschirmfüllend, kurzer Titel, Kasten bleibt blau, Speichern mit Häkchen, Blättern
await p.locator('#pdays [data-day="2026-08-25"]').click(); await p.waitForTimeout(300);
const box = await p.locator('#dlg').boundingBox();
check(Math.round(box.width) === 393 && Math.round(box.height) === 852, `Fenster nicht bildschirmfüllend: ${JSON.stringify(box)}`);
check((await p.locator('#dlg h3').textContent()) === 'Di, 25.08.2026', 'Titel nicht kurz');
check(await p.locator('#pdays [data-day="2026-08-25"]').evaluate(e => e.classList.contains('on')), 'Kasten nicht blau');
await p.locator('#wx button').nth(1).click();
await p.fill('#fProgram', 'Hafenrundfahrt');
await p.locator('[data-nav="1"]').click(); await p.waitForTimeout(300);
check((await db()).trips[0].days['2026-08-25']?.program === 'Hafenrundfahrt', 'Blättern speichert nicht');
check(await p.locator('#pdays [data-day="2026-08-26"]').evaluate(e => e.classList.contains('on')), 'Markierung wandert nicht mit');
await p.fill('#fProgram', 'Blue Mountains');
await p.click('#dlgOk'); await p.waitForTimeout(300);
check((await db()).trips[0].days['2026-08-26']?.program === 'Blue Mountains', 'Häkchen speichert nicht');
check(await p.locator('#pdays [data-day="2026-08-26"]').textContent().then(t => t.includes('Blue Mountains')), 'Kasten nicht aktualisiert');

// Mehr-Menü mit Icons und Häkchen (T-24), Nur erfasste Tage
await p.click('#mainMore'); await p.waitForTimeout(150);
check(await p.locator('.menu .mi', { hasText: 'Alle Tage' }).locator('svg').count() === 2, 'Alle Tage ohne Häkchen und Icon');
await p.locator('.menu .mi', { hasText: 'Nur erfasste Tage' }).click(); await p.waitForTimeout(150);
check(await p.locator('#pdays .box').count() === 3, 'Nur erfasste Tage filtert nicht');

// Zurück zur Startliste, Kontextmenü, Einstellungen
await p.click('#back'); await p.waitForTimeout(200);
check((await p.locator('.ltitle').textContent()) === 'Reiselogbücher', 'Startliste fehlt');
check((await p.locator('.lcount').textContent()) === '2 Reiselogbücher', 'Anzahl falsch');
await p.screenshot({ path: OUT + 'iphone-2-startliste.png' });
const row = p.locator('.irow', { hasText: 'Toskana' });
const rb = await row.boundingBox();
await p.mouse.move(rb.x + 40, rb.y + 20); await p.mouse.down(); await p.waitForTimeout(700); await p.mouse.up(); await p.waitForTimeout(150);
check(await p.locator('.menu .mi', { hasText: 'Einstellungen' }).count() === 1, 'Kontextmenü fehlt');
await p.locator('.menu .mi', { hasText: 'Einstellungen' }).click(); await p.waitForTimeout(300);
check(await row.evaluate(e => e.classList.contains('on')), 'Zeile nicht blau bei Einstellungen');
await p.click('#dlgX'); await p.waitForTimeout(200);

// Reiselogbuch öffnen und löschen → zurück zur Startliste
await row.click(); await p.waitForTimeout(250);
check((await p.locator('.ltitle').textContent()) === 'Toskana', 'Öffnen aus der Liste geht nicht');
await p.click('#mainMore'); await p.locator('.menu .mi', { hasText: 'löschen' }).click(); await p.waitForTimeout(200);
await p.locator('.pop button', { hasText: 'Reiselogbuch löschen' }).click(); await p.waitForTimeout(250);
check((await p.locator('.ltitle').textContent()) === 'Reiselogbücher', 'Nach dem Löschen nicht in der Startliste');
check((await db()).trips.length === 1, 'nicht gelöscht');

// Neues Reiselogbuch über plus
await p.click('#newTrip'); await p.waitForTimeout(300);
await p.fill('#fTitle', 'Island'); await p.fill('#fPeople', 'Anna');
await p.fill('#fStart', '2027-07-01'); await p.fill('#fEnd', '2027-07-10');
await p.locator('#transport button').first().click();
await p.click('#dlgOk'); await p.waitForTimeout(300);
check((await p.locator('.ltitle').textContent()) === 'Island', 'Neues Reiselogbuch nicht geöffnet');

// Wechsel iPhone → iPad hoch → iPhone quer
await p.setViewportSize({ width: 820, height: 1180 }); await p.waitForTimeout(300);
check(!(await p.evaluate(() => document.documentElement.classList.contains('phone'))) && await p.locator('table.days').count() === 1, 'iPad-Ansicht fehlt nach Wechsel');
await p.setViewportSize({ width: 852, height: 393 }); await p.waitForTimeout(300);
check(await p.locator('#pdays').count() === 1, 'iPhone quer nicht kompakt');
await p.screenshot({ path: OUT + 'iphone-3-quer.png' });
console.log('ERR', JSON.stringify(errors));
await b.close();
