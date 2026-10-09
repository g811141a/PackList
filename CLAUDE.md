# Reiselogbuch – Hinweise für Claude

**Version 1.5.0** · Stand 09.10.2026

## Verpflichtend

**Nie selbst entscheiden, eine neue Version zu bauen oder hochzuladen.** Immer vorher fragen
(„Soll ich Version X.Y.Z mit … erstellen? Ja/Nein“) und erst nach ausdrücklichem „Ja“ bauen –
auch bei kleinen Korrekturen und wenn um „korrigieren/verbessern“ gebeten wird.

**Sammelversionen:** Geklärte Punkte in `BACKLOG.md` unter „0. Nächste Version“ sammeln und
gemeinsam bauen. Nach einer Version erst fragen, wenn ein größeres Thema fertig ist oder etwa
5 Punkte gesammelt sind (oder auf Wunsch). Eigene Version außer der Reihe nur bei
Datenverlust oder unbenutzbarer App. Details: `README - Zusammenarbeit allgemein.md`,
Abschnitt 6.

**Apple-like:** Vor jedem Muster Apple-Abgleich (HIG-Checkliste, Apple-App als Vorbild,
Abweichungen mit Grund); nach jeder Version Apple-Review und HIG-Prüfskript. Details:
`README - Zusammenarbeit allgemein.md`, Abschnitt 3.

## Zuerst lesen

Lies zu Beginn jeder Sitzung diese Dateien und halte dich daran:

1. `README - Zusammenarbeit allgemein.md` – wie wir zusammenarbeiten (Antwortformat,
   Ablauf, Versionen)
2. `README - Designrichtlinie allgemein.md` – allgemeine Gestaltung und Komponenten
3. `README - Designrichtlinie Reiselogbuch.md` – Reiselogbuch-spezifische Gestaltung
4. `PROMPT.md` – vollständige Funktionsbeschreibung der App
5. `CHANGELOG.md` – Versionsgeschichte (aktuelle Versionen stehen oben)
6. `BACKLOG.md` – offene Themen; zu Beginn kurz daran erinnern und laufend pflegen

## App-spezifisch

- App: Reiselogbuch, iPad-Web-App (PWA), eine Datei `index.html` plus `sw.js`,
  `manifest.json`, Icons.
- Repo: `g811141a/ReiseLogBuch`, Branch `main`, GitHub Pages:
  https://g811141a.github.io/ReiseLogBuch/
- Bei jeder Version in `index.html` `APP_VERSION` und `APP_BUILT` (Zeitpunkt in
  Europe/Berlin, „TT.MM.JJJJ um hh:mm“) und in `sw.js` den Cache-Namen
  (`reiselogbuch-X.Y.Z`) anpassen.
- Daten liegen im localStorage unter `reiselogbuch.v1`; Änderungen am Datenmodell immer
  mit Übernahme alter Daten (`normalize`).
- Ausgabe (HTML/PDF) hat eine eigene, immer helle Gestaltung (`.rt`) und ist vom
  Apple-Look der App unabhängig.
- Bedienung ab 2.0.0: Seitenleiste `#side` (`renderSide`), Kopfzeile `.nb` mit Kapsel,
  Menüs `openMenu`, Sprechblasen `confirmPop`, Fenster-Kopfzeile `dlgHead` (Häkchen blau über
  `dlgDirty`), gedrückte Schaltflächen `.on`. Seitenleiste ein/aus: `settings.sidebar`.

---

## Versionsgeschichte

| Version | Datum | Inhalt |
|---|---|---|
| 1.5.0 | 09.10.2026 | Pflicht: Apple-Abgleich vor Mustern, Apple-Review nach Versionen |
| 1.4.0 | 09.10.2026 | Verpflichtend: Sammelversionen |
| 1.3.0 | 08.10.2026 | Verpflichtend: nie ohne Freigabe bauen |
| 1.2.0 | 08.10.2026 | BACKLOG.md in die Liste „Zuerst lesen“ |
| 1.1.0 | 08.10.2026 | Hinweise zur Bedienung ab Reiselogbuch 2.0.0 |
| 1.0.0 | 07.10.2026 | erste Fassung |
