// Reiselogbuch-Test: ablauf-suche-tabelle – Aufruf im Repo-Ordner: node tests/ablauf-suche-tabelle.mjs (Bildschirmfotos landen in tests/out/)
import { chromium } from 'playwright';
const days = {}; for (let i = 0; i < 40; i++) { const d = new Date(Date.UTC(2026, 7, 24 + i)).toISOString().slice(0, 10); days[d] = { weather: '☀️', program: i === 30 ? 'Fahrt nach Sydney' : 'Programm ' + i, comment: '😉 ok', quarter: 'Hotel', place: 'Ort' }; }
const trips = [{ id: 'a', title: 'Australien', participants: 'G & A', start: '2026-08-24', end: '2026-11-11', transport: ['flug'], foodColumn: true, days, kosten: 4850 }];
const b = await chromium.launch(); const errs = [];
const p = await b.newPage({ viewport: { width: 1180, height: 820 } }); p.on('pageerror', e => errs.push(e.message));
await p.clock.install({ time: new Date('2026-08-27T14:32:00') });
await p.goto(new URL('../index.html', import.meta.url).href);
await p.evaluate(t => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: { theme: 'light' }, trips: t })), trips);
await p.reload(); await p.waitForTimeout(300);
console.log('kosten width', await p.evaluate(() => document.getElementById('kosten').offsetWidth));
await p.evaluate(() => scrollTo(0, 0));
await p.click('#searchBtn'); await p.locator('#search').pressSequentially('Sydney');
const y0 = await p.evaluate(() => scrollY);
await p.clock.runFor(200); console.log('scroll before pause', await p.evaluate(() => scrollY) === y0);
await p.clock.runFor(600); await p.waitForTimeout(100);
console.log('after pause', await p.evaluate(() => { const m = document.querySelector('mark.cur').closest('tr').getBoundingClientRect().top; const bar = document.getElementById('bar').getBoundingClientRect().bottom; const th = document.querySelector('table.days thead').getBoundingClientRect().bottom; return { rowTop: Math.round(m), barBottom: Math.round(bar), thBottom: Math.round(th) }; }));
console.log('output day cell', await p.evaluate(() => outputBody(db.trips[0], 1, nowStamp()).match(/<td class="nw">[^<]*<br>[^<]*<\/td>/)?.[0]));
await p.emulateMedia({ media: 'print' });
console.log('print padding', await p.evaluate(() => getComputedStyle(document.body).paddingLeft), 'docked', await p.evaluate(() => document.body.classList.contains('docked')));
await p.emulateMedia({ media: 'screen' });
await p.click('#mainMore'); await p.click('.menu .mi:has-text("Einstellungen")');
await p.click('#transport [data-t="pkw"]'); console.log('transport pressed', await p.getAttribute('#transport [data-t="pkw"]', 'aria-pressed'), 'cap', await p.locator('#dlg .chips .cap').count());
console.log('transport scrollable', await p.evaluate(() => { const s = document.getElementById('transport'); return [s.scrollWidth, s.clientWidth]; }));
await p.click('#dlgX'); await p.click('.pop button:has-text("Änderungen verwerfen")');
await p.click('#searchBtn'); await p.click('tr[data-day="2026-08-25"]'); await p.waitForTimeout(200);
await p.click('#wx [data-w="🌧"]'); console.log('wx pressed', await p.getAttribute('#wx [data-w="🌧"]', 'aria-pressed'));
console.log('ERR', errs); await b.close();
