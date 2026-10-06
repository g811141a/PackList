# Designrichtlinie allgemein

**Version 1.0.0** · Stand 06.10.2026

Allgemeine Gestaltungs- und Bedienregeln für alle iPad-Web-Apps von g811141a.
Diese Datei liegt vorerst im Repo ReiseLogBuch und **wandert später ins Design-Repo**;
ihre Versionsnummer wird dann zur Versionsnummer des Design-Repos.
App-spezifische Regeln stehen in einer eigenen Datei je App
(z. B. `README - Designrichtlinie Reiselogbuch.md`).

> **Hinweis für Claude:** Diese Regeln gelten verbindlich für jede Weiterentwicklung.
> Bei jeder Design-Änderung wird diese Datei aktualisiert und ihre Versionsnummer erhöht
> (siehe Abschnitt 13 und Versionsgeschichte).

---

## 1. Zusammenarbeit

- Sprache: Deutsch.
- Ablauf: Ideen sammeln → Rückfragen stellen („Frag nach“) → wenn alles geklärt ist, fragen
  „Soll ich die neue Version X.Y.Z erstellen?“ (mit vorgeschlagener Versionsnummer) →
  erst nach ausdrücklichem „Ja“ bauen.
- Bei Gestaltungsfragen zuerst ein **Muster** (Screenshot) zeigen, bei Bedarf mit Varianten.
- Nur das ändern, was besprochen wurde – keine ungefragten Änderungen.
- Nach jeder Version: testen, Beschreibung (PROMPT.md), CHANGELOG.md und betroffene
  Designrichtlinien aktualisieren, auf `main` pushen, Screenshots schicken, Änderungen auf
  Deutsch zusammenfassen, an den Neustart der App erinnern.
- Im Chat Schaltflächen mit ihren Lucide-Icon-Namen benennen (z. B. „pencil“, „trash“),
  nicht mit Emojis.
- Ein Repo pro App, Bereitstellung über GitHub Pages aus `main`/Hauptordner.

## 2. Grundprinzipien

- Zielgerät iPad (Safari, zum Home-Bildschirm hinzugefügt, PWA, offline nutzbar);
  eine Person nutzt die App, kein Login, kein Teilen.
- Daten bleiben lokal (localStorage); Sicherung über eine Backup-Datei.
- Oberfläche Deutsch, schlicht und klar.
- Eine HTML-Datei (HTML + CSS + JS), dazu `sw.js`, `manifest.json`, Icons 180/512 px.
- Keine Hilfeseite – die Oberfläche ist selbsterklärend; Hinweise bei Bedarf hinter einem
  Info-Icon.
- Alle Aktionen sind echte Schaltflächen (kein reiner Text als Link).
- Keine Systemfenster (alert/confirm mit „OK“/„Close“) – alle Meldungen und Abfragen in
  eigenen Fenstern mit deutschen Schaltflächen.
- Bewusst verworfen: Schatten auf Schaltflächen; eigene Kennzeichnung von Pflichtfeldern.

## 3. Farben

CSS-Variablen auf `:root`; Dunkelmodus über `data-theme="dark"`.

| Variable | Hell | Dunkel | Verwendung |
|---|---|---|---|
| `--bg` | `#f6f3ee` | `#1b1a18` | Seitenhintergrund, Fenster, fixierte Leiste |
| `--card` | `#ffffff` | `#252421` | Schaltflächen, Eingabefelder, Kästen, Tabelle |
| `--ink` | `#22201c` | `#ece8e1` | Text |
| `--muted` | `#8a847a` | `#9a9489` | dezente Texte, Hinweise |
| `--line` | `#e2ddd4` | `#3a3833` | Rahmen, Trennlinien |
| `--accent` | `#2f6f62` | `#6fbfa9` | Hauptaktion (grün), gewählte Schaltflächen, Links |
| `--accent-ink` | `#ffffff` | `#10201c` | Text auf Akzentfarbe |
| `--danger` | `#b3261e` | `#f2948c` | Löschen, Icon ban, Fehlermeldungen, roter Feldrahmen |
| `--warn` | `#c07a12` | `#e2a64b` | Markierungen („fehlt“) |
| `--focus` | `#fff1c2` | `#45391a` | markierte Zeile (gelb) |
| `--th-bg` | `#d9d9d9` | `#3b3a37` | Tabellen-Kopfzeile |
| `--th-line` | `#a5a5a5` | `#625f5a` | Ränder der Kopfzeile, äußere Tabellenumrandung |
| `--zebra` | `#f5f5f5` | `#2e2d2a` | jede 2. sichtbare Tabellenzeile |
| Suchtreffer | `#ffe45c` | `#8a6d00` | gelb hinterlegter Treffer |

- Darstellung Hell/Dunkel in **2 Stufen** (kein „Automatisch“); die Schaltfläche zeigt die
  *Aktion* (moon bei Hell, sun bei Dunkel), nur Icon; die Einstellung wird gemerkt. Beim
  ersten Start gilt die Systemeinstellung.

## 4. Schrift und Abstände

- Systemschrift `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  17 px, Zeilenhöhe 1,45.
- h1 28 px, h2 20 px, Fenstertitel 19 px zentriert; Hinweise 14 px in `--muted`.
- Seitenrand 16 px bzw. iPad-Safe-Area.
- Radien: Schaltflächen/Felder 10 px, Tabelle 12 px, Kästen (Schritte) 14 px, Fenster 18 px.
- Checkbox-Texte in normaler Schrift, Checkboxen 24 × 24 px in Akzentfarbe.

## 5. Schaltflächen

- **Alle Schaltflächen 44 px hoch** (auch lange Texte, Vorschläge, Auswahl-Chips).
  Ausnahmen: mehrzeilige Listeneinträge (z. B. umbrochene Titel) und Textkästen.
- **Reine Icon-, Wetter- und Smiley-Schaltflächen quadratisch 44 × 44 px**;
  Emoji 24 px, Icon 20 px.
- Text-Schaltflächen: Icon links, dann Text (Abstand 6 px); Hintergrund `--card`,
  1 px Rahmen `--line`, **ohne Schatten**.
- Hauptaktion („Fertig“, „Neu … anlegen“, „Teilen“): grün (`--accent`), weißer Text/Icon.
- „Abbrechen“: normaler Text, nur das Icon ban ist rot.
- „Löschen“: roter Text, rotes Icon trash, roter Rahmen (nicht gefüllt); separat von den
  übrigen Aktionen.
- Gewählte Umschalt-Schaltflächen: Akzentfarbe gefüllt (`aria-pressed="true"`).
- Gesperrte Schaltflächen: ausgegraut (Deckkraft 40 %).
- Keine Hover-Farbe auf dem iPad – Hover nur in `@media (hover: hover)`.
- Schwebende Schaltflächen unten rechts (z. B. nach oben / ans Ende): gleiches Aussehen
  wie andere Icon-Schaltflächen, ohne Schatten; ausgeblendet, wenn es nichts zu
  scrollen gibt.

## 6. Icons

- Schaltflächen-Icons aus **Lucide** (Liniengrafiken, Strichstärke 2, `currentColor`),
  als SVG eingebettet (offline). SF Symbols dürfen im Web nicht verwendet werden.
- **Inhalte bleiben Emojis** (z. B. Smileys, Wetter, Spaltenköpfe).
- Allgemeine Zuordnung:

| Aktion | Lucide-Icon | Darstellung |
|---|---|---|
| Fertig | `check` | weiß auf Grün |
| Abbrechen | `ban` | Icon rot, Text normal |
| Schließen | `x` | Icon + Text |
| Löschen | `trash` | rot |
| Bearbeiten | `pencil` | nur Icon |
| Neu anlegen | `plus` | grün, Icon + Text |
| Backup sichern / laden | `save` / `folder-open` | Icon + Text |
| Teilen / Ausgabe | `share` | Icon + Text |
| Vorschau | `eye` | Icon + Text |
| Info / Hinweis ein-/ausblenden | `info` | nur Icon |
| Dunkel / Hell | `moon` / `sun` | nur Icon, zeigt die Aktion |
| Suchen | `search` | im Suchfeld |
| Nach oben / Ans Ende | `arrow-up-to-line` / `arrow-down-to-line` | nur Icon |
| Diktieren | `mic` | nur Icon, pulsiert während der Aufnahme |
| Zurück / Weiter | `chevron-left` / `chevron-right` | Icon + Text |
| Zurücksetzen | `rotate-ccw` | nur Icon, gedämpft |
| HTML-Datei / PDF | `file-code` / `file-text` | Icon + Text |

## 7. Begriffe und Fußleiste

- „Fertig“ = Eingaben übernehmen und schließen.
- „Abbrechen“ = ohne Änderung schließen bzw. Vorgang nicht ausführen.
- „Schließen“ = Fenster ohne Eingaben schließen (Liste, Info, Vorschau, Meldung).
- **„Abbrechen“ nur, wenn rechts eine Gegenaktion steht** (Fertig, Löschen, Entfernen …),
  sonst immer „Schließen“.
- Lage: links „Abbrechen“, rechts die Gegenaktion. Steht „Schließen“ **allein**, dann
  **rechts**; stehen rechts Aktionen, steht „Schließen“ **links**.
- Bestätigungen immer mit dem Verb der Aktion: „Löschen“, „Entfernen“, „Zurücksetzen“,
  „Ersetzen“.
- Systembeschriftungen (z. B. „Reset“ der iPad-Datumsauswahl) bleiben.

## 8. Fenster (Dialoge)

- Aufbau: Kopf (Titel zentriert) · Inhalt (scrollbar) · Fußleiste.
- Breite passt sich dem Inhalt an: höchstens 90 % der Bildschirmbreite, Mindestbreite
  480 px. Erfassungs- und Vorschaufenster fast bildschirmbreit (bis 1100 px).
- Hintergrund `--bg`, Radius 18 px, Schatten, abgedunkelter Hintergrund dahinter.
- Hinweise und Versionsinfo hinter einem Info-Icon, per Antippen ein-/ausblenden.
- Versionsinfo in der zentralen Liste der App unten links:
  „<App> · Version X.Y.Z · erstellt am TT.MM.JJJJ um hh:mm“.
- Nach Aktionen in einer Liste (Bearbeiten, Löschen, Abbrechen beim Neuanlegen) bleibt
  bzw. kehrt die App zur Liste zurück, damit dort weitergearbeitet werden kann.
- Gibt es noch keine Einträge, startet die App mit der leeren Liste und dem grauen Hinweis
  „Noch kein … angelegt.“; „Schließen“ und nicht sinnvolle Aktionen sind ausgegraut, die
  Liste lässt sich nicht schließen (auch nicht mit Escape).
- Technisch: ein Dialog, dessen Inhalt ausgetauscht wird (nicht schließen und neu öffnen);
  ein zweiter Dialog nur für Meldungen und Abfragen.

## 9. Eingaben, Pflichtfelder und Fehlermeldungen

- Eingaben in nummerierten Schritten (grüne runde Nummer 26 px), jeder Schritt als
  weißer Kasten; Nummern laufen fortlaufend über die sichtbaren Schritte.
- Checkboxen eines Schritts rechts in dessen Kopfzeile; zusammengehörige Einstellungen in
  einem gemeinsamen Kasten mit Überschrift (z. B. „Konfiguration …“).
- Eingabefelder schlicht; Formatierung erst in Anzeige und Ausgabe.
- **Pflichtfelder werden nicht gekennzeichnet** (kein Sternchen, kein „erforderlich“,
  auch kein „optional“ bei anderen Feldern).
- **Fehlermeldungen in Rot direkt unter dem betroffenen Feld**, das Feld bekommt einen
  roten Rahmen.
- Beim Öffnen eines Fensters erscheint keine Meldung. Eine Meldung erscheint erst nach
  einer Eingabe: Textfeld leer verlassen oder geleert, Datum geändert, letzte Auswahl
  abgewählt.
- „Fertig“ bleibt ausgegraut, solange etwas fehlt; **ein Tippen auf das ausgegraute
  „Fertig“ zeigt alle fehlenden Angaben** und scrollt zur ersten.
- Diktieren über eine mic-Schaltfläche am Textfeld (sonst Hinweis auf die Mikrofon-Taste).
- Automatisches Speichern alle 10 Sekunden in Erfassungsfenstern; „Abbrechen“ stellt den
  Ausgangszustand wieder her.
- Zahlenfelder rechtsbündig, Tausenderpunkt schon beim Tippen.

## 10. Tabellen (App, HTML und PDF)

- Kopfzeile grau (`--th-bg`), Ränder darin zwei Stufen dunkler (`--th-line`); im
  Dunkelmodus hellere Ränder.
- Jede 2. sichtbare Zeile heller (Zebra); gezählt werden nur sichtbare Zeilen; eine
  markierte Zeile bleibt gelb.
- Trennlinien zwischen allen Spalten; äußere Umrandung in der Farbe der Kopfzeilen-Ränder.
- Kopfzeile bleibt beim Scrollen unter der fixierten Leiste stehen.
- Spaltenbreiten passen sich dem Inhalt an; kompakte Tabellen nur so breit wie nötig;
  Zahlenspalten rechtsbündig (Überschrift und Werte).
- Hängender Einzug: Folgezeilen beginnen unter dem Text, nicht unter Aufzählungszeichen
  oder Emoji.
- Links ohne Unterstreichung.
- Listen in Spalten (z. B. Titel · Zeitraum · Status): Spalten stehen in allen Einträgen
  genau untereinander und rechts angeschlagen; lange Titel brechen um.
- Statistiken bleiben schlichte Listen.

## 11. Ausgabe, Teilen und Meldungen

- Ausgabe-Inhalt unter einer eigenen CSS-Klasse, damit er nicht in die App durchschlägt;
  immer hell (weiß, schwarzer Text), auch in der Vorschau.
- Vorschau vor dem Sichern im App-Fenster; erhöht keinen Zähler.
- Speichern immer über das Teilen-Menü („In Dateien sichern“); PDF über das
  Drucken-Menü. Die App meldet ehrlich, dass das Menü geöffnet bzw. abgebrochen wurde.
- Datumsformat in Texten TT.MM.JJJJ, in Dateinamen JJJJ.MM.TT, Uhrzeit hh:mm
  (im Dateinamen hh.mm).
- Sicherheitsabfrage vor jeder Lösch- oder Rücksetz-Aktion.
- Backup-Erinnerung nur, wenn das letzte Backup älter als 24 Stunden ist; nur ein
  abgeschlossenes Teilen-Menü zählt als Backup.

## 12. Versionen und Aktualisierung

- **Versionsnummer dreistufig Hauptversion.Nebenversion.Korrektur** (z. B. 1.2.1):
  - Hauptversion: grundlegende Änderung (Aufbau, Bedienkonzept, Datenstruktur).
  - Nebenversion: neue Funktion oder sichtbare Verbesserung.
  - Korrektur: Fehlerbehebung ohne neue Funktion.
  - Steigt eine Stufe, beginnen die folgenden wieder bei 0.
- Jede App hat eine `CHANGELOG.md` (Version, Datum, Art, Inhalt).
- Versionsnummer, Erstellungszeitpunkt und Cache-Name des Service Workers bei jeder
  Version erhöhen.
- Service Worker „network first“ mit `cache: 'no-cache'`: Beim Start wird immer bei
  GitHub nachgefragt, neue Versionen sind nach einem Neustart sofort da; offline läuft
  die gespeicherte Version.

## 13. Designrichtlinien pflegen

- Diese Datei und die App-spezifischen Richtlinien werden **bei jeder Design-Änderung**
  aktualisiert, gemeinsam mit der App-Version.
- Eigene dreistufige Versionsnummer je Datei (Bedeutung wie in Abschnitt 12, bezogen auf
  Regeln: neue Regel = Nebenversion, Präzisierung = Korrektur, grundlegend neue
  Gestaltung = Hauptversion).
- In PROMPT.md und CHANGELOG.md jeder App steht, welchen Richtlinien-Versionen sie folgt,
  z. B. „Reiselogbuch 1.0.0 · Designrichtlinie allgemein 1.0.0 · Designrichtlinie
  Reiselogbuch 1.0.0“.

## 14. iPad-Erfahrungen (technisch)

- Safe-Area beachten (`env(safe-area-inset-*)`, `viewport-fit=cover`).
- Speichern über `navigator.share` mit Dateien; Download-Links funktionieren in der
  Home-Bildschirm-App nicht zuverlässig.
- Long-Press-Menü und Textauswahl auf Emoji-Schaltflächen abschalten
  (`-webkit-touch-callout: none`, `user-select: none`).
- Elemente mit `display` im CSS brauchen eine eigene `[hidden]`-Regel, sonst bleiben sie
  sichtbar.
- Emojis mit und ohne Variantenzeichen (z. B. ☹️/☹) als gleich behandeln.
- Nach Updates die App einmal ganz schließen und neu öffnen.

## 15. Geplant: Design-Repo

- Gemeinsames `design.css` (Farben, Schaltflächen, Fenster, Tabellen), `ui.js`
  (Meldungen, Abfragen, Icons, Teilen/Speichern), diese Richtlinie, eine Vorlage für neue
  Apps und eine Startseite g811141a.github.io mit allen Apps.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 1.0.0 | 06.10.2026 | erste Fassung | Zusammenfassung aller bisher vereinbarten allgemeinen Regeln (Stand Reiselogbuch 1.0.0) |
