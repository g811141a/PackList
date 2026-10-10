// Reiselogbuch-Test: ablauf-markierung-menues – Aufruf im Repo-Ordner: node tests/ablauf-markierung-menues.mjs (Bildschirmfotos landen in tests/out/)
import { chromium } from 'playwright';
const trips = [{ id: 'a', title: 'Australien', participants: 'G', start: '2026-08-24', end: '2026-11-11', transport: ['flug'], days: {}, fazit: 'Schön' },
  { id: 'b', title: 'Toskana', participants: 'G', start: '2027-05-03', end: '2027-05-17', transport: ['pkw'], days: {} },
  { id: 'c', title: 'Wien Kurztrip', participants: 'G', start: '2026-03-12', end: '2026-03-15', transport: ['zug'], days: {} }];
const b = await chromium.launch(); const errs = [];
for (const [theme, w, h, tag] of [['light', 1180, 820, 'hell-quer'], ['dark', 1180, 820, 'dunkel-quer'], ['light', 820, 1180, 'hell-hoch'], ['dark', 820, 1180, 'dunkel-hoch']]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2, hasTouch: true }); p.on('pageerror', e => errs.push(e.message));
  await p.clock.setFixedTime(new Date('2026-08-27T14:32:00'));
  await p.goto(new URL('../index.html', import.meta.url).href);
  await p.evaluate(([t, th]) => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: { theme: th, lastBackup: Date.now() }, trips: t })), [trips, theme]);
  await p.reload(); await p.waitForTimeout(300);
  const row = n => p.locator('.side-row', { hasText: n });
  // ellipsis-Menü
  await p.click('#sideMore'); await p.waitForTimeout(150);
  console.log(tag, 'line', await p.locator('.menu .line').count(), 'sep', await p.locator('.menu .sep').count(), 'notes', await p.locator('.menu .note').allTextContents());
  await p.screenshot({ path: new URL(`out/R221-menue-${tag}.png`, import.meta.url).pathname });
  await p.mouse.click(w - 20, h - 20); await p.waitForTimeout(150);
  // Kontextmenü → Einstellungen
  const bx = await row('Toskana').boundingBox();
  await p.mouse.move(bx.x + 40, bx.y + 20); await p.mouse.down(); await p.waitForTimeout(750); await p.mouse.up(); await p.waitForTimeout(150);
  await p.locator('.menu .mi', { hasText: 'Einstellungen' }).click(); await p.waitForTimeout(300);
  const on1 = await row('Toskana').evaluate(e => e.classList.contains('on'));
  if (tag === 'hell-quer') await p.screenshot({ path: new URL('out/R221-einstellungen.png', import.meta.url).pathname });
  await p.click('#dlgX'); await p.waitForTimeout(200);
  console.log(tag, 'settings row on', on1, 'after close', await row('Toskana').evaluate(e => e.classList.contains('on')));
  if (await p.locator('#side').isVisible() && w < 1100) { await row('Australien').click(); await p.waitForTimeout(200); }
  else { await row('Australien').click(); await p.waitForTimeout(200); }
  // Tageszeile
  await p.locator('table.days tbody tr').nth(2).click(); await p.waitForTimeout(300);
  const d1 = await p.locator('table.days tbody tr.on').evaluateAll(es => es.map(e => e.dataset.day));
  if (tag === 'hell-quer') await p.screenshot({ path: new URL('out/R221-tag.png', import.meta.url).pathname });
  await p.locator('dialog [data-nav="1"]').click(); await p.waitForTimeout(300);
  const d2 = await p.locator('table.days tbody tr.on').evaluateAll(es => es.map(e => e.dataset.day));
  await p.click('#dlgX'); await p.waitForTimeout(200);
  if (await p.locator('.pop').count()) { await p.locator('.pop button').first().click(); await p.waitForTimeout(200); }
  const d3 = await p.locator('table.days tbody tr.on').count();
  console.log(tag, 'day on', d1, 'nav', d2, 'after close', d3);
  await p.locator('#fazit').scrollIntoViewIfNeeded(); await p.click('#fazit'); await p.waitForTimeout(300);
  const f1 = await p.locator('#fazit').evaluate(e => e.classList.contains('on'));
  await p.click('#dlgX'); await p.waitForTimeout(200);
  console.log(tag, 'fazit on', f1, 'after', await p.locator('#fazit').evaluate(e => e.classList.contains('on')));
  await p.close();
}
console.log('ERR', errs); await b.close();
