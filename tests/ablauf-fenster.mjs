// Reiselogbuch-Test: ablauf-fenster – Aufruf im Repo-Ordner: node tests/ablauf-fenster.mjs (Bildschirmfotos landen in tests/out/)
import { chromium } from 'playwright';
const trips = [{ id: 'a', title: 'Australien', participants: 'G', start: '2026-08-24', end: '2026-11-11', transport: ['flug'], days: {} },
  { id: 'b', title: 'Toskana', participants: 'G', start: '2027-05-03', end: '2027-05-17', transport: ['pkw'], days: {} }];
const b = await chromium.launch(); const errs = [];
for (const [w, h, name] of [[1180, 820, 'quer'], [820, 1180, 'hoch']]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 }); p.on('pageerror', e => errs.push(e.message));
  await p.clock.setFixedTime(new Date('2026-08-27T14:32:00'));
  await p.goto(new URL('../index.html', import.meta.url).href);
  await p.evaluate(t => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: { theme: 'light', sidebar: false, lastBackup: Date.now() }, trips: t })), trips);
  await p.reload(); await p.waitForTimeout(300);
  console.log(name, 'side visible', await p.isVisible('#side'), 'over', await p.evaluate(() => side.classList.contains('over')), 'current', await p.textContent('.side-row.current b'), 'title', await p.textContent('.nb-title'),
    'gap bottom', await p.evaluate(() => innerHeight - side.getBoundingClientRect().bottom));
  await p.screenshot({ path: new URL(`out/S212-${name}.png`, import.meta.url).pathname }); await p.close();
}
console.log('ERR', errs); await b.close();
