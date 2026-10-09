// HIG-Prüfskript: misst die App gegen die HIG-Checkliste (Designrichtlinie allgemein, Abschnitt 16).
// Aufruf im Repo-Ordner: node tests/hig.mjs   (braucht Playwright mit Chromium)
// Geprüft wird jede Ansicht in hell und dunkel, quer und hoch: Antippflächen, Schriftgrößen, Kontraste,
// doppelte Anführungszeichen, Löschen am Ende von Menüs und ob die auslösende Schaltfläche blau bleibt.
// Bewusste Abweichungen (Abschnitt 16) werden nicht gezählt. Ergebnis: Abweichungsliste, Exit-Code 1 bei Funden.
import { chromium } from 'playwright';

const APP = new URL('../index.html', import.meta.url).href;
const trips = [
  { id: 'a', title: 'Australien', participants: 'Anna, Ben', start: '2026-08-24', end: '2026-09-05', transport: ['flug', 'leihwagen'], quarterList: true, foodColumn: true, moodColumn: true, quarterColumn: true, fazit: 'Schön',
    days: { '2026-08-24': { weather: '☀️', program: 'Ankunft Sydney\nOper', mood: '🙂 super', food: '🍽️ Fischmarkt – gut\n😋 Harrys Café – Pie', quarter: 'Hotel Rocks', place: 'Sydney' } } },
  { id: 'b', title: 'Toskana', participants: 'Anna', start: '2027-05-03', end: '2027-05-17', transport: ['pkw'], days: {} },
];

const found = new Map();
const note = (kind, text, where) => {
  const key = `${kind}: ${text}`;
  if (!found.has(key)) found.set(key, new Set());
  found.get(key).add(where);
};

// Misst die sichtbare, oberste Ebene (Menü/Sprechblase, sonst offenes Fenster, sonst Seite).
async function measure(p, where) {
  const r = await p.evaluate(() => {
    const vis = e => { const s = getComputedStyle(e), b = e.getBoundingClientRect();
      return b.width > 0 && b.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && b.bottom > 0 && b.top < innerHeight && b.right > 0 && b.left < innerWidth; };
    const onTop = e => { if (document.querySelector('.layer')) return !!e.closest('.menu, .pop');
      const d = document.querySelector('dialog[open]'); return d ? d.contains(e) : true; };
    const label = e => ((e.id ? '#' + e.id + ' ' : '') + (e.getAttribute('aria-label') || e.textContent || e.placeholder || '')).trim().replace(/\s+/g, ' ').slice(0, 40);
    const res = { target: [], font: [], contrast: [], quotes: [], menu: [] };
    // Antippflächen: 44 pt Standard; Knöpfe in Kapseln und Schalter wie bei Apple ab 28 pt.
    document.querySelectorAll('button, a[href], input:not([type=hidden]):not([type=file]), textarea, select, [role=menuitem]').forEach(e => {
      if (!vis(e) || !onTop(e)) return;
      // Bewusste Abweichung (Reiselogbuch, 09.10.2026): Essen-Links in der Tabelle bleiben so eng wie der Text.
      if (e.matches('table.days .ln:not(.q) a')) return;
      const b = e.getBoundingClientRect(), s = getComputedStyle(e);
      // Inline-Links: die Antippfläche schließt den (unsichtbaren) Innenabstand ein.
      const h = s.display === 'inline' ? b.height + parseFloat(s.paddingTop) + parseFloat(s.paddingBottom) : b.height;
      const inCap = e.closest('.cap, .grp, .navgrp') || (e.type === 'checkbox' && /switch|toggle/.test(e.className + e.parentElement.className)) || (e.type === 'checkbox' && b.width >= 51 && b.height >= 31);
      const min = inCap ? 28 : 44;
      if (Math.min(b.width, h) < min) res.target.push(`${e.tagName.toLowerCase()} ‚${label(e)}‘ ${Math.round(b.width)}×${Math.round(h)} px (mind. ${min})`);
    });
    // Schrift und Kontrast
    const rgb = c => (c.match(/[\d.]+/g) || [0, 0, 0, 0]).map(Number);
    const lum = ([r, g, b]) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
    const bgOf = e => { for (let x = e; x; x = x.parentElement) { const c = rgb(getComputedStyle(x).backgroundColor); if ((c[3] ?? 1) > .5) return c; } return rgb(getComputedStyle(document.body).backgroundColor); };
    const root = getComputedStyle(document.documentElement);
    const accent = rgb(root.getPropertyValue('--accent').trim().replace(/^#(..)(..)(..)$/, (m, a, b, c) => `rgb(${parseInt(a, 16)},${parseInt(b, 16)},${parseInt(c, 16)})`));
    const warn = rgb(root.getPropertyValue('--warn').trim().replace(/^#(..)(..)(..)$/, (m, a, b, c) => `rgb(${parseInt(a, 16)},${parseInt(b, 16)},${parseInt(c, 16)})`));
    const same = (a, b) => a.slice(0, 3).every((v, i) => Math.abs(v - b[i]) < 3);
    const seen = new Set();
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let t; (t = w.nextNode());) {
      const e = t.parentElement, txt = t.textContent.trim().replace(/\s+/g, ' ');
      if (!e || !txt || seen.has(e)) continue; seen.add(e);
      if (!vis(e) || !onTop(e) || e.closest('#printout, .rt, script, style, [disabled]')) continue;
      if (/[„“]/.test(txt)) res.quotes.push(`‚${txt.slice(0, 40)}‘`);
      if (/^\p{Extended_Pictographic}/u.test(txt)) continue;
      const s = getComputedStyle(e), fs = parseFloat(s.fontSize);
      if (fs < 11) res.font.push(`${fs} px ‚${txt.slice(0, 30)}‘`);
      const fg = rgb(s.color), bg = bgOf(e), a = fg[3] ?? 1;
      const mix = [0, 1, 2].map(i => fg[i] * a + bg[i] * (1 - a));
      const L1 = lum(mix), L2 = lum(bg), cr = (Math.max(L1, L2) + .05) / (Math.min(L1, L2) + .05);
      const need = fs >= 18 || parseInt(s.fontWeight) >= 700 ? 3 : 4.5;
      // Bewusste Abweichungen: Weiß auf Systemblau, Orange --warn
      if (same(bg, accent) || same(mix, accent) || same(mix, warn)) continue;
      if (cr < need) res.contrast.push(`${cr.toFixed(2)} : 1 (mind. ${need}) ${fs} px ‚${txt.slice(0, 30)}‘`);
    }
    // Menüs: Löschen (rot) steht am Ende
    document.querySelectorAll('.menu').forEach(m => {
      const items = [...m.querySelectorAll('.mi')]; const i = items.findIndex(x => x.classList.contains('red'));
      if (i >= 0 && i !== items.length - 1) res.menu.push(`‚${items[i].textContent.trim()}‘ steht nicht am Ende`);
    });
    return res;
  });
  for (const [k, list] of Object.entries(r)) for (const x of list) note({ target: 'Antippfläche', font: 'Schrift', contrast: 'Kontrast', quotes: 'Anführungszeichen', menu: 'Menü' }[k], x, where);
}

const browser = await chromium.launch();
for (const scheme of ['light', 'dark']) for (const [w, h] of [[1180, 820], [820, 1180]]) {
  const tag = `${scheme === 'light' ? 'hell' : 'dunkel'} ${w > h ? 'quer' : 'hoch'}`;
  const p = await browser.newPage({ viewport: { width: w, height: h }, hasTouch: true, colorScheme: scheme });
  const errors = [];
  p.on('pageerror', e => errors.push(e.message));
  await p.clock.setFixedTime(new Date('2026-08-27T14:32:00'));
  await p.goto(APP);
  await p.evaluate(t => localStorage.setItem('reiselogbuch.v1', JSON.stringify({ settings: {}, trips: t })), trips);
  await p.reload(); await p.waitForTimeout(300);
  const M = s => measure(p, `${s} (${tag})`);
  const away = async () => { if (await p.locator('.layer').count()) { await p.mouse.click(w - 4, h - 4); await p.waitForTimeout(150); } };
  const stays = async (sel, s) => { if (!await p.locator(sel).first().evaluate(e => e.classList.contains('on')).catch(() => false)) note('Markierung', `${sel} bleibt nicht blau`, `${s} (${tag})`); };

  await M('Start');
  await p.click('#sideMore'); await p.waitForTimeout(150); await stays('#sideMore', 'Menü Seitenleiste'); await M('Menü Seitenleiste'); await away();
  await p.locator('.side-row', { hasText: 'Australien' }).click(); await p.waitForTimeout(250);
  await M('Hauptansicht');
  await p.click('#mainMore'); await p.waitForTimeout(150); await stays('#mainMore', 'Mehr-Menü'); await M('Mehr-Menü');
  await p.locator('.menu .mi', { hasText: 'Darstellung' }).click(); await p.waitForTimeout(150); await M('Untermenü Darstellung'); await away();
  await p.click('#shareBtn'); await p.waitForTimeout(150); await stays('#shareBtn', 'Teilen-Menü'); await M('Teilen-Menü'); await away();
  await p.click('#searchBtn'); await p.waitForTimeout(150); await p.fill('#search', 'Oper'); await p.waitForTimeout(700); await M('Suche');
  await p.click('#searchBtn').catch(() => {}); await p.waitForTimeout(150);
  const dialog = async (open, s, opener) => {
    await open(); await p.waitForTimeout(350);
    if (opener) await stays(opener, s);
    await M(s);
    await p.click('#dlgX'); await p.waitForTimeout(200);
    if (await p.locator('.pop').count()) { await p.locator('.pop button').first().click(); await p.waitForTimeout(200); }
  };
  await dialog(async () => { await p.click('#mainMore'); await p.waitForTimeout(150); await p.locator('.menu .mi', { hasText: 'Einstellungen' }).click(); }, 'Fenster Einstellungen', '#mainMore');
  await dialog(() => p.locator('table.days tbody tr').first().click(), 'Fenster Tag', 'table.days tbody tr[data-day="2026-08-24"]');
  await dialog(async () => { await p.locator('#fazit').scrollIntoViewIfNeeded(); await p.click('#fazit'); }, 'Fenster Fazit', '#fazit');
  await dialog(() => p.evaluate(() => openTripDialog(null)), 'Fenster Neues Reiselogbuch');
  await p.click('#mainMore'); await p.waitForTimeout(150); await p.locator('.menu .mi', { hasText: 'löschen' }).click(); await p.waitForTimeout(250);
  await M('Sprechblase Löschen'); await p.locator('.pop button', { hasText: 'Abbrechen' }).click(); await p.waitForTimeout(150);
  for (const e of errors) note('Skriptfehler', e, tag);
  await p.close();
}
await browser.close();

if (!found.size) { console.log('HIG-Prüfung: keine Abweichungen.'); process.exit(0); }
console.log(`HIG-Prüfung: ${found.size} Abweichung(en)\n`);
for (const [k, where] of found) console.log(`- ${k}\n    ${[...where].slice(0, 3).join(' · ')}${where.size > 3 ? ` · +${where.size - 3}` : ''}`);
process.exit(1);
