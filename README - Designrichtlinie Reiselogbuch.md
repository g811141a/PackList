# Designrichtlinie Reiselogbuch

**Version 1.1.0** · Stand 07.10.2026

> **Es gilt die `README - Designrichtlinie allgemein.md` (Version 2.0.0).**
> Hier stehen nur **Abweichungen** (bewusst anders als dort) und **Ausprägungen**
> (konkrete Ausgestaltung einer allgemeinen Regel für das Reiselogbuch).
> Die vollständige Funktionsbeschreibung steht in `PROMPT.md`.
>
> Derzeit gibt es **keine Abweichungen** – alle Punkte sind Ausprägungen.

> **Hinweis für Claude:** Bei jeder Design-Änderung nachfragen, ob sie allgemein oder nur
> für das Reiselogbuch gilt. Diese Datei wird bei jeder Reiselogbuch-spezifischen
> Design-Änderung aktualisiert und ihre Versionsnummer erhöht.

---

## 1. Begriffe — Ausprägung

- App-Name „Reiselogbuch“; der Begriff „Reisetagebuch“ kommt nicht vor.
- Liste: „Reiselogbücher“; Fenster „Neues Reiselogbuch“ / „Reiselogbuch bearbeiten“;
  Schaltflächen „Neues Reiselogbuch anlegen“, „Reiselogbuch löschen“.
- Überschrift in App und Ausgabe: „Reiselogbuch – <Titel>“.
- Erfassungsschritte: „Wetter“, „Programm“, „Wie war was?“, „Essen und Trinken“, „Quartier“.
- Checkboxen: „Quartier wie Vortag“, „keinen Google-Maps Link“,
  „Quartierliste in der Ausgabe“.
- Blättern in der Tageserfassung: „Vortag“ / „Folgetag“.
- Ein-/Ausblenden: „Leere Tage aus“ / „Leere Tage ein“ (zeigt die Aktion).
- Leere Liste: „Noch kein Reiselogbuch angelegt.“

## 2. Icons und Emojis — Ausprägung

| Aktion | Lucide-Icon |
|---|---|
| Reiselogbücher | `book-open` |
| Leere Tage aus / ein | `fold-vertical` / `list-chevrons-up-down` |

Emojis als Inhalt: Wetter ☀️ 🌤 🌦 🌧 ☁️ ⛈ ❄️ · Reisemittel 🚗 🚆 🚲 ✈️ 🚙 🚢 🚐 🚶 ·
📍 vor Maps-Links (nur Zeichen, verlinkt ist nur der Name; Ort nach Komma) ·
▫️ vor mehreren Programmpunkten · ⊘ am Zeilenanfang = ohne Maps-Link ·
Spaltenköpfe 🙂☹️😉 (Wie war was?), 🍽️🍷☕️ (Essen und Trinken), 😴💤 (Quartier).

## 3. Hauptansicht — Ausprägung

- Obere Leiste (Komponente Leiste): Reiselogbücher · (Abstand) · Leere Tage · Dunkel/Hell ·
  Ausgabe (Hauptaktion, grün) · Suchfeld (Komponente) mit Treffer-Navigation. Die Suche
  durchsucht Programm und die sichtbaren Spalten der Tagestabelle.
- Darunter: Überschrift, Reiseteilnehmer, Reisezeitraum, Reisemittel und
  Fortschrittsanzeige („Tag 42 von 80 · 38 erfasst“).
- Tagestabelle: Tag · Programm · sichtbare konfigurierte Spalten. Die erste Lücke ist
  gelb markiert, vergangene leere Tage tragen „fehlt“ (Farbe `--warn`).
- Darunter: Fazit (Kasten passt sich dem Inhalt an), Gesamtkosten (Zahlenfeld 96 px,
  „€ … ,-“), Quartierliste (nur mit Spalte Quartier), Statistik.

## 4. Tageserfassung — Ausprägung des Erfassungsfensters

- Kopf: Vortag · Wochentag mit vollem Datum („Sonntag, 04.10.2026“) · Folgetag.
- Schritte je nach sichtbaren Spalten (2 bis 5).
- Eingeschaltet (grün getönt mit Rand): gewählte Wetter-Symbole und das Mikrofon während
  der Aufnahme (pulsiert zusätzlich).
- Programm: Vorschläge als Chips zum Antippen („Weiterfahrt nach …“, „Rundgang durch …“,
  „Besichtigung …“, „Freetour …“); „…“ ist nur Platzhalter und wird nicht übernommen.
- Smiley-Leisten bei „Wie war was?“, „Essen und Trinken“ (eigener Satz:
  🕗 🕙 🕛 🕒 🕕 😋 👌 👍 😕 🤮 👎 ⭐️ 🍕 🍔 🥩 🍷 🍺 ☕️) und im Fazit.
- Quartier: Kopfzeile „Quartier wie Vortag“ (nicht am ersten Tag) und
  „keinen Google-Maps Link“; Felder Name und „Ort für Google Maps, z. B. Cairns,
  Australien“; Link „📍 In Google Maps prüfen“.

## 5. Reiselogbücher — Ausprägung der Liste in Spalten

- Spalten: Reisetitel · Reisezeitraum · Status („läuft gerade“, „beendet“, „geplant“).
- Reihenfolge: zuletzt beginnende Reise zuerst.
- Zeile unter der Liste: Backup sichern · Backup laden · (Abstand) ·
  Neues Reiselogbuch anlegen; darunter Hinweis zum Backup mit Zeitpunkt des letzten.
- Info-Icon in der Fußleiste: „Reiselogbuch · Version X.Y.Z · erstellt am …“.

## 6. Reiselogbuch anlegen / bearbeiten — Ausprägung

- Gewählte Reisemittel: eingeschaltet (grün getönt mit Rand); „Reiselogbuch löschen“:
  Löschen (rot gefüllt).
- Kästen: Reisetitel · Reiseteilnehmer · Reisezeitraum (Von/Bis) · Reisemittel (Chips) ·
  Konfiguration Tabellenspalten · Quartierliste in der Ausgabe · (beim Bearbeiten)
  Reiselogbuch löschen.
- Pflichtfelder: Reisetitel, Reiseteilnehmer, Reisezeitraum, mindestens ein Reisemittel.
  Meldungen:
  - „Bitte einen Reisetitel eingeben.“
  - „Bitte Reiseteilnehmer eingeben.“
  - „Bitte Beginn und Ende der Reise wählen.“ bzw. „Der Zeitraum überschneidet sich mit
    „…“ (…). Bitte korrigieren.“ – erscheint auch, sobald ein Titel eingegeben wurde
    (das vorgeschlagene Datum kann sich mit einer anderen Reise überschneiden)
  - „Bitte mindestens ein Reisemittel wählen.“
- Konfiguration Tabellenspalten: Hinweis „Die Spalten „Tag“ und „Programm“ werden immer
  angezeigt.“; Checkboxen in Tabellenreihenfolge „🙂☹️😉 Spalte Wie war was?“,
  „🍽️🍷☕️ Spalte Essen und Trinken“, „😴💤 Spalte Quartier“, beim Anlegen alle
  eingeschaltet; Hinweis „Ausgeblendete Spalten fehlen in Tabelle, Tageserfassung und
  Ausgabe. Vorhandene Einträge bleiben erhalten.“ Ohne Spalte Quartier ist
  „Quartierliste in der Ausgabe“ ausgegraut.

## 7. Ausgabe — Ausprägung

- Fenster „Ausgabe“: Vorschau · HTML-Datei · PDF · Info-Icon; Dateiname als Hinweis.
- Inhalt: Überschrift, Reisedaten, Tagestabelle (nur erfasste Tage, ohne
  Wetter-Platzhalter), danach Fazit · Gesamtkosten · Quartierliste (falls aktiviert) ·
  Statistik · Zeile „Ausgabe V… erstellt am …“.
- Dateinamen: „Reiselogbuch <Titel> JJJJ.MM.TT-JJJJ.MM.TT V001“ und
  „Ω Backup Reiselogbuch JJJJ.MM.TT hh.mm.json“.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 1.1.0 | 07.10.2026 | Neben | Angepasst an allgemein 2.0.0: Suchfeld mit Treffer-Navigation in der oberen Leiste, eingeschaltete Wetter/Reisemittel/Mikrofon, Löschen rot gefüllt |
| 1.0.1 | 06.10.2026 | Korrektur | Bereinigt: Verweis auf „allgemein 1.1.0“, keine Wiederholungen, Punkte als Abweichung/Ausprägung gekennzeichnet; allgemeine Regeln in die allgemeine Richtlinie verschoben |
| 1.0.0 | 06.10.2026 | erste Fassung | Zusammenfassung aller Reiselogbuch-spezifischen Gestaltungsregeln (Stand Reiselogbuch 1.0.0) |
