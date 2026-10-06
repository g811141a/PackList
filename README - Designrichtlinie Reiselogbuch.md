# Designrichtlinie Reiselogbuch

**Version 1.0.0** · Stand 06.10.2026 · baut auf **Designrichtlinie allgemein 1.0.0** auf

Reiselogbuch-spezifische Gestaltungsregeln. Alle allgemeinen Regeln (Farben, Schaltflächen,
Fenster, Fehlermeldungen, Versionen …) stehen in `README - Designrichtlinie allgemein.md`.
Die vollständige Funktionsbeschreibung steht in `PROMPT.md`.

> **Hinweis für Claude:** Diese Datei wird bei jeder Reiselogbuch-spezifischen
> Design-Änderung aktualisiert und ihre Versionsnummer erhöht.

---

## 1. Begriffe

- App-Name „Reiselogbuch“; der Begriff „Reisetagebuch“ kommt nicht mehr vor.
- „Reiselogbücher“ (Liste, Fenstertitel), „Neues Reiselogbuch anlegen“,
  „Neues Reiselogbuch“ / „Reiselogbuch bearbeiten“ (Fenstertitel), „Reiselogbuch löschen“.
- Überschrift in App und Ausgabe: „Reiselogbuch – <Titel>“.
- Tagesschritte: „Wetter“, „Programm“, „Wie war was?“, „Essen und Trinken“, „Quartier“.
- Checkboxen: „Quartier wie Vortag“, „keinen Google-Maps Link“,
  „Quartierliste in der Ausgabe“, Spalten „🙂☹️😉 Spalte Wie war was?“,
  „🍽️🍷☕️ Spalte Essen und Trinken“, „😴💤 Spalte Quartier“.
- Navigation in der Tageserfassung: „Vortag“ / „Folgetag“.
- „Leere Tage aus“ / „Leere Tage ein“ (zeigt die Aktion).

## 2. Icon-Zuordnung (zusätzlich zur allgemeinen)

| Aktion | Lucide-Icon |
|---|---|
| Reiselogbücher | `book-open` |
| Leere Tage aus / ein | `fold-vertical` / `list-chevrons-up-down` |
| Ausgabe | `share` (grün) |
| Vorschau | `eye` |
| Smileys zurücksetzen | `rotate-ccw` |

Emojis als Inhalt: Wetter ☀️ 🌤 🌦 🌧 ☁️ ⛈ ❄️ · Reisemittel 🚗 🚆 🚲 ✈️ 🚙 🚢 🚐 🚶 ·
📍 vor Maps-Links · ▫️ vor mehreren Programmpunkten · ⊘ = Zeile ohne Maps-Link ·
Spaltenköpfe 🙂☹️😉, 🍽️🍷☕️, 😴💤.

## 3. Hauptansicht

- Fixierte Leiste: Reiselogbücher · (Abstand) · Leere Tage · Dunkel/Hell · Ausgabe (grün) ·
  Suche.
- Darunter Überschrift, Reiseteilnehmer, Reisezeitraum, Reisemittel und dezente
  Fortschrittsanzeige („Tag 42 von 80 · 38 erfasst“).
- Tagestabelle mit Spalten Tag · Programm · sichtbare konfigurierte Spalten; die erste
  Lücke ist gelb markiert, vergangene leere Tage tragen „fehlt“ (orange).
- Unter der Tabelle: Fazit (Kasten passt sich dem Inhalt an), Gesamtkosten (rechtsbündig,
  96 px, „€ … ,-“), Quartierliste (nur mit Spalte Quartier), Statistik.
- Schwebend unten rechts: arrow-up-to-line / arrow-down-to-line.

## 4. Tageserfassung

- Fast bildschirmbreites Fenster; Kopf: Vortag · Wochentag mit Datum · Folgetag.
- Schritte je nach sichtbaren Spalten (2 bis 5), fortlaufend nummeriert.
- Smiley-Leisten (Wie war was?, Essen und Trinken, Fazit): einzeilig, mit dem Finger
  wischen, Verlauf am Rand, rotate-ccw fest rechts; sortiert nach Häufigkeit; langes
  Drücken entfernt einen Smiley (mit Abfrage).
- Vorschläge im Programm als Chips; „…“ ist nur Platzhalter.
- Quartier: Kopfzeile „Quartier wie Vortag“ (nicht am ersten Tag) und
  „keinen Google-Maps Link“; Felder Name und „Ort für Google Maps, z. B. Cairns,
  Australien“; Link „📍 In Google Maps prüfen“ ohne Unterstreichung.
- Fußleiste: Abbrechen (ban rot) · Fertig (grün).

## 5. Reiselogbücher (Liste)

- Jeder Eintrag in drei Spalten: Titel (fett) · Reisezeitraum · Status (grau:
  „läuft gerade“, „beendet“, „geplant“). Zeitraum und Status stehen ganz rechts und
  in allen Einträgen genau untereinander, Status linksbündig; lange Titel brechen um,
  der Zeitraum steht dann zweizeilig („von -“ / „bis“).
- Aktuell geöffnetes Reiselogbuch mit grünem Rahmen; daneben pencil (44 × 44).
- Reihenfolge: zuletzt beginnende Reise zuerst.
- Zeile darunter: Backup sichern · Backup laden · (Abstand) · Neues Reiselogbuch anlegen
  (grün); darunter Hinweis zum Backup.
- Fußleiste: Info-Icon (Version) links · Schließen rechts.
- Leere Liste: „Noch kein Reiselogbuch angelegt.“, Schließen und Backup sichern
  ausgegraut.
- Löschen, Bearbeiten (Fertig/Abbrechen) und Abbrechen beim Neuanlegen führen zurück zur
  Liste; Fertig beim Neuanlegen öffnet das neue Reiselogbuch.

## 6. Reiselogbuch anlegen / bearbeiten

- Kästen: Reisetitel · Reiseteilnehmer · Reisezeitraum (Von/Bis) · Reisemittel (Chips) ·
  Konfiguration Tabellenspalten · Quartierliste in der Ausgabe · (beim Bearbeiten)
  Reiselogbuch löschen.
- Pflichtfelder (ohne Kennzeichnung): Reisetitel, Reiseteilnehmer, Reisezeitraum,
  mindestens ein Reisemittel. Meldungen:
  - „Bitte einen Reisetitel eingeben.“
  - „Bitte Reiseteilnehmer eingeben.“
  - „Bitte Beginn und Ende der Reise wählen.“ / „Der Zeitraum überschneidet sich mit
    „…“ (…). Bitte korrigieren.“ (erscheint auch, sobald ein Titel eingegeben wurde)
  - „Bitte mindestens ein Reisemittel wählen.“
- Konfiguration Tabellenspalten: Hinweis „Die Spalten „Tag“ und „Programm“ werden immer
  angezeigt.“, drei Checkboxen in Tabellenreihenfolge, beim Anlegen alle eingeschaltet;
  Hinweis zu ausgeblendeten Spalten. Ohne Spalte Quartier ist „Quartierliste in der
  Ausgabe“ ausgegraut.

## 7. Ausgabe und Vorschau

- Fenster „Ausgabe“: Vorschau · HTML-Datei · PDF · Info-Icon; Dateiname als Hinweis;
  Fußleiste nur „Schließen“ rechts.
- Vorschau: fast bildschirmbreit, Inhalt immer hell; Kopf „Vorschau“ und klein der
  Dateiname; Fußleiste Schließen links · PDF · Teilen (grün) rechts.
- Ausgabe-Design: Schrift 11 pt, h1 20 pt, h2 14 pt, Links #1a5fb4, Tabellen wie in der
  App; Reihenfolge Fazit · Gesamtkosten · Quartierliste (falls aktiviert) · Statistik ·
  dezente letzte Zeile „Ausgabe V003 erstellt am TT.MM.JJJJ um hh:mm“ (9 pt, grau).
- Google-Maps-Darstellung: 📍 ist nur Zeichen, verlinkt ist nur der Name; Ort nach Komma.
- Dateinamen: „Reiselogbuch <Titel> JJJJ.MM.TT-JJJJ.MM.TT V001“ (nie zwei Leerzeichen);
  Backup „Ω Backup Reiselogbuch JJJJ.MM.TT hh.mm.json“.
- PDF im Hochformat, weißer Seitenhintergrund.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 1.0.0 | 06.10.2026 | erste Fassung | Zusammenfassung aller Reiselogbuch-spezifischen Gestaltungsregeln (Stand Reiselogbuch 1.0.0) |
