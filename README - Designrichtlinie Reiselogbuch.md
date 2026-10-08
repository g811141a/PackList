# Designrichtlinie Reiselogbuch

**Version 2.1.2** · Stand 08.10.2026

> **Es gilt die `README - Designrichtlinie allgemein.md` (Version 3.2.2).**
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
- Seitenleiste: „Reiselogbücher“; Fenster „Neues Reiselogbuch“ (über plus) und
  „Einstellungen“ (Mehr-Menü); Menüpunkt „Reiselogbuch löschen“.
- Überschrift in App und Ausgabe: „Reiselogbuch – <Titel>“.
- Erfassungsschritte: „Wetter“, „Programm“, „Wie war was?“, „Essen und Trinken“, „Quartier“.
- Options-Kapseln (Tageserfassung): „Quartier wie Vortag“, „keinen Google-Maps Link“; Schalter (Bearbeiten):
  „Quartierliste in der Ausgabe“.
- Blättern in der Tageserfassung: chevron-left / chevron-right (Vortag / Folgetag, nur Icon).
- Filter im Mehr-Menü: „Alle Tage“ / „Nur erfasste Tage“ (Häkchen vor der Auswahl).
- Leer: „Noch kein Reiselogbuch angelegt.“ (Seitenleiste) bzw. zusätzlich „Mit „plus“ in der
  Seitenleiste ein neues anlegen.“ (Inhalt).

## 2. Icons und Emojis — Ausprägung

| Aktion | Lucide-Icon |
|---|---|
| Ausgabe (Teilen-Menü) | `share` |
| Einstellungen des Reiselogbuchs | `settings` |

Emojis als Inhalt: Wetter ☀️ 🌤 🌦 🌧 ☁️ ⛈ ❄️ · Reisemittel 🚗 🚆 🚲 ✈️ 🚙 🚢 🚐 🚶 ·
📍 vor Maps-Links (nur Zeichen, verlinkt ist nur der Name; Ort nach Komma) ·
▫️ vor mehreren Programmpunkten · ⊘ am Zeilenanfang = ohne Maps-Link ·
Spaltenköpfe 🙂☹️😉 (Wie war was?), 🍽️🍷☕️ (Essen und Trinken), 😴💤 (Quartier).

## 3. Hauptansicht — Ausprägung

- **Seitenleiste** (Komponente): Reiselogbücher, zuletzt beginnende Reise zuerst; je Eintrag
  Titel · „TT.MM.JJJJ - TT.MM.JJJJ · läuft gerade / beendet / geplant“. Unten (nur wenn
  heute noch kein Backup erstellt wurde) „Letztes Backup erstellt am …“ mit „Backup
  erstellen“. Mehr-Menü: Backup erstellen · Backup laden · Versionszeile.
- **Kopfzeile** (Komponente): Titel der Reise; Kapsel [share | search | ellipsis].
  - share → Menü: Vorschau · HTML · PDF (jeweils mit grauem Hinweis), darunter
    „N erfasste Tage · Dateiname: …“.
  - search → Suchzeile; die Suche durchsucht Programm und die sichtbaren Spalten.
  - ellipsis → Mehr-Menü: Alle Tage / Nur erfasste Tage · Einstellungen · Modus dunkel/hell ·
    Reiselogbuch löschen (rot, Sprechblase mit Tipp zum Backup).
- Darunter: Überschrift, Reiseteilnehmer, Reisezeitraum, Reisemittel und
  Fortschrittsanzeige („Tag 42 von 80 · 38 erfasst“).
- Tagestabelle: Tag · Programm · sichtbare konfigurierte Spalten. Die erste Lücke ist
  gelb markiert, vergangene leere Tage tragen „fehlt“ (Farbe `--warn`).
- Darunter: Fazit (Kasten passt sich dem Inhalt an), Gesamtkosten (Betragsfeld 150 px,
  „[ 4.850,00 ] €“), Quartierliste (nur mit Spalte Quartier), Statistik (Reisetage · Quartiere ·
  Nächte · Wetter · Smileys).

## 4. Tageserfassung — Ausprägung des Erfassungsfensters

- Kopfzeile: x · Wochentag mit vollem Datum („Sonntag, 04.10.2026“), darunter
  „Automatisch gespeichert um hh:mm“ · Kapsel [chevron-left | chevron-right] · Häkchen.
- Schritte je nach sichtbaren Spalten (2 bis 5).
- Eingeschaltet (blau getönt mit Haarlinie): gewählte Wetter-Symbole und das Mikrofon während
  der Aufnahme (pulsiert zusätzlich).
- Programm: Vorschläge als Chips zum Antippen („Weiterfahrt nach …“, „Rundgang durch …“,
  „Besichtigung …“, „Freetour …“); „…“ ist nur Platzhalter und wird nicht übernommen.
- Smiley-Leisten bei „Wie war was?“, „Essen und Trinken“ (eigener Satz:
  🕗 🕙 🕛 🕒 🕕 😋 👌 👍 😕 🤮 👎 ⭐️ 🍕 🍔 🥩 🍷 🍺 ☕️) und im Fazit.
- Quartier: Kopfzeile „Quartier wie Vortag“ (nicht am ersten Tag) und
  „keinen Google-Maps Link“; Felder Name und „Ort für Google Maps, z. B. Cairns,
  Australien“ **nebeneinander in einer Zeile (halb und halb)**, bei schmalem Bildschirm
  untereinander; Link „📍 In Google Maps prüfen“.

## 5. Abfragen — Ausprägung der Sprechblasen

- Reiselogbuch löschen (am ellipsis der Kopfzeile) · Backup laden („Ersetzen“, am ellipsis der
  Seitenleiste) · Smiley entfernen (am Smiley) · Smileys zurücksetzen (am rotate-ccw) ·
  Änderungen verwerfen (am x). Rote Schaltflächen: „Reiselogbuch löschen“, „Ersetzen“,
  „Entfernen“, „Zurücksetzen“, „Änderungen verwerfen“.

## 6. Neues Reiselogbuch / Einstellungen — Ausprägung

- Gewählte Reisemittel: eingeschaltet (blau getönt mit Haarlinie).
- Kästen: Reisetitel · Reiseteilnehmer · Reisezeitraum („Von“ Datum · „Bis“ Datum) ·
  Reisemittel (Chips) · Konfiguration Tabellenspalten · Quartierliste in der Ausgabe.
- Pflichtfelder: Reisetitel, Reiseteilnehmer, Reisezeitraum, mindestens ein Reisemittel.
  Meldungen:
  - „Bitte einen Reisetitel eingeben.“
  - „Bitte Reiseteilnehmer eingeben.“
  - „Bitte Beginn und Ende der Reise wählen.“ bzw. „Der Zeitraum überschneidet sich mit
    „…“ (…). Bitte korrigieren.“ – erscheint auch, sobald ein Titel eingegeben wurde
    (das vorgeschlagene Datum kann sich mit einer anderen Reise überschneiden)
  - „Bitte mindestens ein Reisemittel wählen.“
- Konfiguration Tabellenspalten: Hinweis „Die Spalten „Tag“ und „Programm“ werden immer
  angezeigt.“; Schalter in Tabellenreihenfolge „Spalte 🙂☹️😉 ‚Wie war was?‘“,
  „Spalte 🍽️🍷☕️ ‚Essen und Trinken‘“, „Spalte 😴💤 ‚Quartier‘“ (einfache
  Anführungszeichen), beim Anlegen alle eingeschaltet; Hinweis „Ausgeblendete Spalten fehlen in Tabelle, Tageserfassung und
  Ausgabe. Vorhandene Einträge bleiben erhalten.“ Ohne Spalte Quartier ist
  „Quartierliste in der Ausgabe“ ausgegraut.

## 7. Ausgabe — Ausprägung

- Kein eigenes Fenster „Ausgabe“ mehr: Teilen-Menü in der Kopfzeile (Abschnitt 3).
- Inhalt: Überschrift, Reisedaten, Tagestabelle (nur erfasste Tage, ohne
  Wetter-Platzhalter; Wetter in der Spalte „Tag“ unter dem Datum), danach Fazit · Gesamtkosten · Quartierliste (falls aktiviert) ·
  Statistik · Zeile „Ausgabe V… erstellt am …“.
- Dateinamen: „Reiselogbuch <Titel> JJJJ.MM.TT-JJJJ.MM.TT V001“ und
  „Ω Backup Reiselogbuch JJJJ.MM.TT hh.mm.json“.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 2.1.2 | 08.10.2026 | Korrektur | Angepasst an allgemein 3.2.1 (Seitenleiste beim Start, Abstand unten) |
| 2.1.1 | 08.10.2026 | Korrektur | Ausgabe: Wetter in der Spalte „Tag“ unter dem Datum; Auswahl-Kapseln für Smileys, Wetter, Reisemittel; Betragsfeld dynamisch |
| 2.1.0 | 08.10.2026 | Neben | Angepasst an allgemein 3.1.0: Backup-Texte („Backup erstellen“, „Letztes Backup erstellt am …“), Gesamtkosten „4.850,00 €“, Statistik mit Nächten |
| 2.0.0 | 08.10.2026 | Haupt | Angepasst an allgemein 3.0.0: Seitenleiste Reiselogbücher mit Backup-Hinweis, Kopfzeile mit Kapsel [share \| search \| ellipsis], Teilen-Menü statt Fenster „Ausgabe“, Mehr-Menü (Filter, Einstellungen, Modus, Löschen), Sprechblasen, Fenster „Einstellungen“, Spaltennamen mit einfachen Anführungszeichen, Von/Bis beim Zeitraum |
| 1.2.0 | 07.10.2026 | Neben | Hotel und Ort in einer Zeile; Farben auf Apple-Blau; Options-Kapseln und Schalter statt Checkboxen |
| 1.1.0 | 07.10.2026 | Neben | Angepasst an allgemein 2.0.0: Suchfeld mit Treffer-Navigation in der oberen Leiste, eingeschaltete Wetter/Reisemittel/Mikrofon, Löschen rot gefüllt |
| 1.0.1 | 06.10.2026 | Korrektur | Bereinigt: Verweis auf „allgemein 1.1.0“, keine Wiederholungen, Punkte als Abweichung/Ausprägung gekennzeichnet; allgemeine Regeln in die allgemeine Richtlinie verschoben |
| 1.0.0 | 06.10.2026 | erste Fassung | Zusammenfassung aller Reiselogbuch-spezifischen Gestaltungsregeln (Stand Reiselogbuch 1.0.0) |
