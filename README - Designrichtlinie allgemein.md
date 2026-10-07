# Designrichtlinie allgemein

**Version 2.1.0** · Stand 07.10.2026

Allgemeine Gestaltungs- und Bedienregeln für alle iPad-Web-Apps von g811141a.
Diese Datei liegt vorerst im Repo ReiseLogBuch und **wandert später ins Design-Repo**;
ihre Versionsnummer wird dann zur Versionsnummer des Design-Repos.
App-spezifische Regeln stehen in einer eigenen Datei je App
(z. B. `README - Designrichtlinie Reiselogbuch.md`). Regeln zur Zusammenarbeit stehen in
`README - Zusammenarbeit allgemein.md`.

> **Hinweis für Claude:** Diese Regeln gelten verbindlich für jede Weiterentwicklung.
> Bei jeder Design-Änderung wird diese Datei aktualisiert und ihre Versionsnummer erhöht
> (siehe Abschnitt 12 und Versionsgeschichte). Wiederkehrende Elemente sind in
> Abschnitt 15 „Komponenten“ einmal definiert und werden überall genau so verwendet.

---

## 1. Grundprinzipien

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
- **Apple-Look** (iPadOS): Hintergrund Hellgrau, Kästen weiß ohne Rand, schwebende Schaltflächen.
- Bewusst verworfen: eigene Kennzeichnung von Pflichtfeldern; harte, schmale Schatten.

## 2. Farben

CSS-Variablen auf `:root`; Dunkelmodus über `data-theme="dark"`. Helligkeitsstufen wie bei
Apple: Hintergrund → Kasten/Fenster → Schaltfläche (im Dunkelmodus Schwarz → Dunkelgrau →
heller).

| Variable | Hell | Dunkel | Verwendung |
|---|---|---|---|
| `--bg` | `#f2f2f7` | `#000000` | Seitenhintergrund, fixierte Leiste |
| `--card` | `#ffffff` | `#1c1c1e` | Kästen, Tabelle, Eingabefelder (ohne Rand) |
| `--dlg-bg` / `--dlg-card` / `--dlg-field` | `#f2f2f7` / `#ffffff` / `#ffffff` | `#1c1c1e` / `#2c2c2e` / `#1c1c1e` | Fenster, Kästen im Fenster, Felder im Fenster |
| `--btn` | `#f9f9f9` | `#3a3a3c` | Fläche der Schaltflächen und Suchfelder |
| `--btn-rim` | `#ffffff` | `rgba(255,255,255,.16)` | Lichtkante (Haarlinie 0,5 px) |
| `--float` | `0 3px 28px rgba(0,0,0,.16)` | `0 3px 28px rgba(0,0,0,.7)` | Schatten „schwebend“ (Apple Mail gemessen) |
| `--ink` | `#1c1c1e` | `#ffffff` | Text |
| `--muted` | `#8a8a8e` | `#8e8e93` | dezente Texte, Hinweise |
| `--line` | `#d1d1d6` | `#38383a` | Trennlinien (Haarlinie) |
| `--field-line` | `#c7c7cc` | `#48484a` | Haarlinie um Eingabefelder |
| `--accent` | `#007aff` | `#0a84ff` | **Akzentfarbe Apple-Blau:** Hauptaktion, Auswahl, Schritt-Nummern, Links, Rahmen und Markierungen |
| `--accent-ink` | `#ffffff` | `#ffffff` | Text auf Akzentfarbe |
| `--sel-bg` | `#dcebff` | `#10335c` | Fläche eingeschalteter Schaltflächen und Options-Kapseln |
| `--sw-on` / `--sw-off` | `#34c759` / `#e9e9eb` | `#30d158` / `#39393d` | Schalter ein (Apple-Grün) / aus |
| `--glow-accent` | `0 2px 4px rgba(0,0,0,.10), 0 5px 18px rgba(0,122,255,.50)` | `0 2px 4px rgba(0,0,0,.5), 0 5px 18px rgba(10,132,255,.50)` | leuchtender Schein der Hauptaktion und eingeschalteter Elemente |
| `--table-shadow` | `0 1px 3px rgba(0,0,0,.12), 0 8px 24px rgba(0,0,0,.12)` | zusätzlich `0 0 0 .5px rgba(255,255,255,.12)`, Schatten `.6` | Schatten um Tabellen |
| `--danger` | `#b3261e` | `#ff6961` | Fehlermeldungen, Icon ban, roter Feldrahmen |
| `--danger-fill` | `#d70015` | `#ff453a` | Lösch-Schaltfläche (gefüllt) |
| `--glow-danger` | `0 2px 4px rgba(0,0,0,.12), 0 5px 14px rgba(215,0,21,.35)` | `0 2px 4px rgba(0,0,0,.5), 0 5px 16px rgba(255,69,58,.35)` | Schatten der Lösch-Schaltfläche |
| `--warn` | `#c07a12` | `#e2a64b` | Markierungen („fehlt“) |
| `--focus` | `#fff1c2` | `#45391a` | markierte Zeile (gelb) |
| `--th-bg` / `--th-line` | `#e5e5ea` / `#c7c7cc` | `#2c2c2e` / `#48484a` | Tabellen-Kopfzeile und ihre Ränder |
| `--zebra` | `#f7f7f9` | `#161618` | jede 2. sichtbare Tabellenzeile |
| `--mark` / `--mark-cur` | `#ffe45c` / `#ffc46b` | `#8a6d00` / `#e08a1e` (schwarze Schrift) | Suchtreffer / Treffer im Fokus |

- Darstellung Hell/Dunkel in **2 Stufen** (kein „Automatisch“); die Schaltfläche zeigt die
  *Aktion* (moon bei Hell, sun bei Dunkel), nur Icon; die Einstellung wird gemerkt. Beim
  ersten Start gilt die Systemeinstellung.

## 3. Schrift und Abstände

- Systemschrift `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  17 px, Zeilenhöhe 1,45.
- h1 28 px, h2 20 px, Fenstertitel 19 px zentriert; Hinweise 14 px in `--muted`.
- Seitenrand 16 px bzw. iPad-Safe-Area.
- **Abstand zwischen Schaltflächen 12 px** (wie bei Apple), in Leisten, Reihen und Listen.
- Radien: Schaltflächen und Suchfelder Kapsel (22 px), Icon-Schaltflächen rund,
  Listeneinträge und Kästen 14 px, Eingabefelder 10 px, Tabelle 12 px, Fenster 18 px.
- Trennlinien und Feldränder als Haarlinie (0,5 px); Kästen und Tabelle ohne Rand.
- Keine klassischen Checkboxen: Ein/Aus-Einstellungen als **Schalter**, Optionen beim Erfassen als **Options-Kapsel** (Abschnitt 15).

## 4. Schaltflächen

- **Alle Schaltflächen 44 px hoch** (auch lange Texte, Vorschläge, Auswahl-Chips).
  Ausnahmen: mehrzeilige Listeneinträge (z. B. umbrochene Titel) und Textkästen.
- **Reine Icon-, Wetter- und Smiley-Schaltflächen quadratisch 44 × 44 px**;
  Emoji 24 px, Icon 20 px.
- **Alle Schaltflächen und Suchfelder schweben** (Komponente „Schwebende Schaltfläche“):
  Fläche `--btn`, Lichtkante `--btn-rim` (0,5 px), Schatten `--float`, Kapselform;
  Icon-Schaltflächen rund. Text-Schaltflächen: Icon links, dann Text (Abstand 6 px).
- **Farben von Schaltflächen** – jede Farbe hat genau eine Bedeutung:
  - **Blau gefüllt = Hauptaktion** (je Fenster bzw. Leiste höchstens eine: Fertig, Ausgabe,
    Neu … anlegen, Teilen): `--accent`, weiße Schrift, Lichtkante, Schatten `--glow-accent`.
  - **Blau getönt mit Haarlinie = eingeschaltet** (Umschalt-Schaltflächen wie Wetter,
    Reisemittel, Mikrofon während der Aufnahme): Fläche `--sel-bg`, Haarlinie (0,5 px)
    `--accent`, Schrift normal, Schatten `--glow-accent` (`aria-pressed="true"`). Die Breite
    ändert sich beim Einschalten nicht.
  - **Apple-Grün** nur für eingeschaltete **Schalter**.
  - **Rot gefüllt = Löschen** (endgültige Löschaktionen): `--danger-fill`, weiße Schrift
    und Icon trash, Schatten `--glow-danger`; separat von den übrigen Aktionen.
  - Alle übrigen Schaltflächen neutral (schwebend).
- „Abbrechen“: neutral, nur das Icon ban ist rot.
- Gesperrte Schaltflächen: ausgegraut (Deckkraft 40 %).
- Keine Hover-Farbe auf dem iPad – Hover nur in `@media (hover: hover)`.
- Schaltflächen unten rechts (z. B. nach oben / ans Ende): runde schwebende
  Icon-Schaltflächen; ausgeblendet, wenn es nichts zu scrollen gibt.

## 5. Icons

- Schaltflächen-Icons aus **Lucide** (Liniengrafiken, Strichstärke 2, `currentColor`),
  als SVG eingebettet (offline). SF Symbols dürfen im Web nicht verwendet werden.
- **Inhalte bleiben Emojis** (z. B. Smileys, Wetter, Spaltenköpfe).
- Allgemeine Zuordnung:

| Aktion | Lucide-Icon | Darstellung |
|---|---|---|
| Fertig | `check` | weiß auf Blau |
| Voriger / nächster Treffer | `chevron-up` / `chevron-down` | nur Icon, als Kapsel-Gruppe |
| Abbrechen | `ban` | Icon rot, Text normal |
| Schließen | `x` | Icon + Text |
| Löschen | `trash` | weiß auf Rot |
| Bearbeiten | `pencil` | nur Icon |
| Neu anlegen | `plus` | blau, Icon + Text |
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

## 6. Begriffe und Fußleiste

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

## 7. Fenster (Dialoge)

- Aufbau: Kopf (Titel zentriert) · Inhalt (scrollbar) · Fußleiste.
- Breite passt sich dem Inhalt an: höchstens 90 % der Bildschirmbreite, Mindestbreite
  480 px. Erfassungs- und Vorschaufenster fast bildschirmbreit (bis 1100 px).
- Hintergrund `--dlg-bg`, Kästen darin `--dlg-card`, Radius 18 px, Schatten, abgedunkelter
  Hintergrund dahinter.
- Hinweise und Versionsinfo hinter einem Info-Icon, per Antippen ein-/ausblenden.
- Versionsinfo in der zentralen Liste der App unten links:
  „<App> · Version X.Y.Z · erstellt am TT.MM.JJJJ um hh:mm“.
- Nach Aktionen in einer Liste (Bearbeiten, Löschen, Abbrechen beim Neuanlegen) bleibt
  bzw. kehrt die App zur Liste zurück, damit dort weitergearbeitet werden kann.
- Gibt es noch keine Einträge, startet die App mit der leeren Liste und dem grauen Hinweis
  „Noch kein … angelegt.“; „Schließen“ und nicht sinnvolle Aktionen sind ausgegraut, die
  Liste lässt sich nicht schließen (auch nicht mit Escape).
- **Erfassungsfenster** (Einträge erfassen): fast bildschirmbreit; Kopf
  Zurück (chevron-left) · Titel · Weiter (chevron-right) zum Blättern zwischen Einträgen;
  Fußleiste Abbrechen (links) · Fertig (rechts); automatisches Speichern (Abschnitt 8).
- **Vorschaufenster**: fast bildschirmbreit, Inhalt immer hell und genau wie die
  ausgegebene Datei; Kopf „Vorschau“ und darunter klein der Dateiname; Fußleiste
  Schließen (links) · PDF · Teilen (blau, rechts); nach Teilen bzw. PDF schließt die
  Vorschau, es folgen Meldung und ggf. Backup-Erinnerung.
- Technisch: ein Dialog, dessen Inhalt ausgetauscht wird (nicht schließen und neu öffnen);
  ein zweiter Dialog nur für Meldungen und Abfragen.

## 8. Eingaben, Pflichtfelder und Fehlermeldungen

- Eingaben in nummerierten Schritten (blaue runde Nummer 26 px), jeder Schritt als
  Kasten ohne Rand; Nummern laufen fortlaufend über die sichtbaren Schritte.
- Options-Kapseln eines Schritts rechts in dessen Kopfzeile; zusammengehörige Einstellungen in
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
- **Smiley-Leisten** (Schnellauswahl über einem Textfeld): nur einzeilig, mit dem Finger
  nach links/rechts wischen, Verlauf am Rand als Hinweis auf weitere Smileys,
  Zurücksetzen (rotate-ccw) fest rechts daneben. Sortiert nach Häufigkeit (meistbenutzte
  vorne), nie benutzte in Standardreihenfolge dahinter. Langes Drücken entfernt einen
  Smiley (mit Sicherheitsabfrage); wird er wieder verwendet, kommt er zurück.
  Zurücksetzen stellt die Standard-Smileys her und setzt die Zähler auf null (mit
  Abfrage). Ein angetippter Smiley wird angehängt, wenn der Cursor in einer leeren Zeile
  oder hinter Smileys steht, sonst beginnt eine neue Zeile.
- Diktieren über eine mic-Schaltfläche am Textfeld (sonst Hinweis auf die Mikrofon-Taste).
- Automatisches Speichern alle 10 Sekunden in Erfassungsfenstern; „Abbrechen“ stellt den
  Ausgangszustand wieder her.
- Zahlenfelder rechtsbündig, Tausenderpunkt schon beim Tippen.

## 9. Tabellen (App, HTML und PDF)

- Kopfzeile grau (`--th-bg`) mit Rändern `--th-line`; die Tabelle selbst ohne äußeren Rand,
  mit Schatten `--table-shadow`, damit die seitlichen Grenzen gut zu sehen sind.
- Jede 2. sichtbare Zeile heller (Zebra); gezählt werden nur sichtbare Zeilen; eine
  markierte Zeile bleibt gelb.
- Trennlinien zwischen allen Spalten.
- Kopfzeile bleibt beim Scrollen unter der fixierten Leiste stehen.
- Spaltenbreiten passen sich dem Inhalt an; kompakte Tabellen nur so breit wie nötig;
  Zahlenspalten rechtsbündig (Überschrift und Werte).
- Hängender Einzug: Folgezeilen beginnen unter dem Text, nicht unter Aufzählungszeichen
  oder Emoji.
- Links ohne Unterstreichung.
- **Liste in Spalten** (z. B. Liste der Reisen/Projekte): jeder Eintrag als Schaltfläche
  mit Titel (fett) · Zeitraum · Status (grau). Zeitraum und Status stehen ganz rechts und
  in allen Einträgen genau untereinander, Status linksbündig; der Titel nutzt den freien
  Platz davor. Ist ein Titel zu lang, bricht er um und der Zeitraum steht zweizeilig
  („von -“ / „bis“). Der aktuell geöffnete Eintrag hat einen blauen Rahmen; rechts
  daneben pencil (44 × 44) zum Bearbeiten. Einzeilige Einträge 44 px hoch.
- Statistiken bleiben schlichte Listen.

## 10. Ausgabe, Teilen und Meldungen

- Ausgabe-Inhalt unter einer eigenen CSS-Klasse, damit er nicht in die App durchschlägt;
  immer hell (weiß, schwarzer Text), auch in der Vorschau.
- Vorschau vor dem Sichern im App-Fenster; erhöht keinen Zähler.
- Speichern immer über das Teilen-Menü („In Dateien sichern“); PDF über das
  Drucken-Menü. Die App meldet ehrlich, dass das Menü geöffnet bzw. abgebrochen wurde.
- **Ausgabe-Design** (HTML und PDF): Systemschrift 11 pt, h1 20 pt, h2 14 pt, schwarzer
  Text auf Weiß, Links `#1a5fb4` ohne Unterstreichung, Tabellen wie in der App
  (Kopf `#d9d9d9`, Ränder `#a5a5a5`, Zebra `#f5f5f5`), Zeilen nicht über Seitenumbrüche
  teilen. Dezente letzte Zeile (9 pt, grau): „Ausgabe V003 erstellt am TT.MM.JJJJ um
  hh:mm“. PDF im Hochformat, weißer Seitenhintergrund, Dateiname als Seitentitel.
- **Dateinamen-Muster**:
  - Ausgabe: „<App> <Titel> JJJJ.MM.TT-JJJJ.MM.TT V001“ – fortlaufender Zähler je Eintrag
    (gemeinsam für HTML und PDF, im Backup enthalten), nie zwei Leerzeichen hintereinander.
  - Backup: „Ω Backup <App> JJJJ.MM.TT hh.mm.json“ (ohne Zähler).
- Datumsformat in Texten TT.MM.JJJJ, in Dateinamen JJJJ.MM.TT, Uhrzeit hh:mm
  (im Dateinamen hh.mm).
- Sicherheitsabfrage vor jeder Lösch- oder Rücksetz-Aktion.
- Backup-Erinnerung nur, wenn das letzte Backup älter als 24 Stunden ist; nur ein
  abgeschlossenes Teilen-Menü zählt als Backup.

## 11. Versionen und Aktualisierung

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

## 12. Designrichtlinien pflegen

- Diese Datei und die App-spezifischen Richtlinien werden **bei jeder Design-Änderung**
  aktualisiert, gemeinsam mit der App-Version.
- **Bei jeder Design-Änderung wird geklärt, ob sie eine allgemeine Regel ist (diese
  Datei) oder nur für eine App gilt** (App-Richtlinie); Claude fragt nach und nennt dabei
  seine Einschätzung als Vorschlag.
- App-Richtlinien verweisen eingangs auf diese Datei und enthalten **keine
  Wiederholungen**, nur **Abweichungen** (bewusst anders als hier) und **Ausprägungen**
  (konkrete Ausgestaltung einer allgemeinen Regel für die App), jeweils so gekennzeichnet.
- Eigene dreistufige Versionsnummer je Datei (Bedeutung wie in Abschnitt 11, bezogen auf
  Regeln: neue Regel = Nebenversion, Präzisierung = Korrektur, grundlegend neue
  Gestaltung = Hauptversion).
- Wiederkehrende Elemente werden als **Komponente** (Abschnitt 15) definiert; Apps und
  App-Richtlinien verweisen nur noch auf den Namen der Komponente.
- In PROMPT.md und CHANGELOG.md jeder App steht, welchen Richtlinien-Versionen sie folgt,
  z. B. „Reiselogbuch 1.0.0 · Designrichtlinie allgemein 1.0.0 · Designrichtlinie
  Reiselogbuch 1.0.0“.

## 13. iPad-Erfahrungen (technisch)

- Safe-Area beachten (`env(safe-area-inset-*)`, `viewport-fit=cover`).
- Speichern über `navigator.share` mit Dateien; Download-Links funktionieren in der
  Home-Bildschirm-App nicht zuverlässig.
- Long-Press-Menü und Textauswahl auf Emoji-Schaltflächen abschalten
  (`-webkit-touch-callout: none`, `user-select: none`).
- Elemente mit `display` im CSS brauchen eine eigene `[hidden]`-Regel, sonst bleiben sie
  sichtbar.
- Emojis mit und ohne Variantenzeichen (z. B. ☹️/☹) als gleich behandeln.
- Nach Updates die App einmal ganz schließen und neu öffnen.

## 14. Geplant: Design-Repo

- Gemeinsames `design.css` (Farben, Schaltflächen, Fenster, Tabellen), `ui.js`
  (Meldungen, Abfragen, Icons, Teilen/Speichern), diese Richtlinie, eine Vorlage für neue
  Apps und eine Startseite g811141a.github.io mit allen Apps.

## 15. Komponenten

Jede Komponente ist hier einmal beschrieben (Zweck · Aufbau · Maße · Aussehen · Zustände ·
Verhalten · technischer Name). Im Design-Repo wird jede Komponente später einmal
programmiert (`design.css`, `ui.js`) und von allen Apps übernommen.

### 15.1 Schwebende Schaltfläche
- **Zweck:** jede Aktion. **Technisch:** `button` (Hauptaktion `.primary`, Löschen
  `.danger`, eingeschaltet `aria-pressed="true"`, nur Icon `.iconbtn`).
- **Aufbau:** Icon (20 px) links, dann Text; oder nur Icon bzw. Emoji (24 px).
- **Maße:** 44 px hoch, Kapsel (Radius 22 px); Icon-/Emoji-Schaltflächen 44 × 44 rund;
  Abstand zu Nachbarn 12 px.
- **Aussehen/Zustände:** neutral `--btn` + Lichtkante + `--float`; Hauptaktion,
  eingeschaltet und Löschen siehe Abschnitt 4; gesperrt 40 % Deckkraft.

### 15.2 Suchfeld
- **Zweck:** Suchen in der aktuellen Ansicht. **Technisch:** `.searchbox`, `.navgrp`.
- **Aufbau:** Lupe (search) · Eingabe „Suchen“ · Trefferanzeige · x-Schaltfläche;
  rechts daneben Kapsel-Gruppe chevron-up / chevron-down.
- **Maße:** 44 px hoch, Kapsel; leer 200 px breit, mit Eingabe 300 px; Abstand 12 px.
- **Aussehen:** wie die schwebende Schaltfläche; Lupe, Trefferanzeige grau; x als grauer
  Kreis mit weißem Kreuz.
- **Zustände:**
  - leer: nur Lupe und Platzhalter, keine Navigation
  - mit Treffern: rechtsbündig „3 von 57“ (ohne das Wort „Treffer“), x; Navigation
    sichtbar; am ersten Treffer chevron-up ausgegraut, am letzten chevron-down
  - ohne Treffer: rechtsbündig „0“, beide Pfeile ausgegraut
- **Verhalten:** Suche beim Tippen; jede Markierung ist ein Treffer; der erste wird
  angesprungen. Treffer gelb (`--mark`), Treffer im Fokus hellorange (`--mark-cur`) und in
  die Bildmitte gescrollt. Pfeile und Eingabetaste springen weiter, ohne Umlauf vom letzten
  zum ersten. x löscht die Eingabe, der Cursor bleibt im Feld. Gefiltert wird auf Einträge
  mit Treffern.

### 15.3 Leiste
- **Obere Leiste:** fixiert, Hintergrund `--bg`, unten Haarlinie; Schaltflächen
  schwebend, Abstand 12 px; links die zentrale Liste, rechts Funktionen, Hauptaktion und
  Suchfeld.
- **Fußleiste in Fenstern:** Haarlinie oben; Regeln für Abbrechen/Fertig/Schließen
  siehe Abschnitt 6.

### 15.4 Fenster
- Typen: **Liste** (z. B. Reiselogbücher), **Erfassung**, **Vorschau**, **Meldung/Abfrage**
  – Aufbau und Verhalten siehe Abschnitt 7.

### 15.5 Kasten (Schritt)
- Fläche `--dlg-card` bzw. `--card`, Radius 14 px, ohne Rand, Innenabstand 14 px;
  Kopfzeile mit blauer Schritt-Nummer, Titel, rechts Options-Kapseln und Icon-Schaltflächen.

### 15.6 Eingabefeld mit Fehlermeldung
- Fläche weiß bzw. `--dlg-field`, Lichtkante `--btn-rim` und Schatten `--float` wie die
  schwebenden Schaltflächen (auch Zahlenfelder wie Gesamtkosten), Radius 10 px, 44 px hoch
  (Textfelder mehrzeilig); Fehler: 1 px roter Rand und rote Meldung darunter
  (Abschnitt 8).

### 15.7 Smiley-Leiste
- Siehe Abschnitt 8; Smileys als runde schwebende 44 × 44-Schaltflächen, Abstand 12 px.

### 15.8 Liste in Spalten
- Siehe Abschnitt 9; Einträge als schwebende Schaltflächen mit Radius 14 px, aktueller
  Eintrag mit 2 px blauem Rand.

### 15.9 Tabelle
- Siehe Abschnitt 9.

### 15.10 Info-Icon mit Hinweis
- Runde Icon-Schaltfläche `info`; ein Tippen blendet einen grauen Hinweis ein bzw. aus.

### 15.11 Schalter (Einstellungen ein/aus)
- **Zweck:** Ein/Aus-Einstellungen, z. B. in Bearbeiten-Fenstern. **Technisch:** `.swlist`,
  `label.check.sw` mit `input[type=checkbox]`.
- **Aufbau:** Zeile mit Text links und Apple-Schalter rechts; Zeilen 52 px hoch, dazwischen
  Haarlinie; Schalter 51 × 31 px, weißer Knopf.
- **Zustände:** ein = `--sw-on` (Apple-Grün), Knopf rechts; aus = `--sw-off`, Knopf links;
  gesperrt 40 % Deckkraft (Text und Schalter). Kein Schein.

### 15.12 Options-Kapsel (Optionen beim Erfassen)
- **Zweck:** einzelne Ein/Aus-Optionen in der Kopfzeile eines Kastens. **Technisch:**
  `label.check.chip` mit verstecktem `input[type=checkbox]`.
- **Aussehen:** wie eine schwebende Schaltfläche (Kapsel, 44 px, Schrift 15 px); ein =
  `--sel-bg`, Haarlinie `--accent`, Schein `--glow-accent` und **Häkchen in Akzentfarbe vor
  dem Text**; aus = neutral ohne Häkchen; gesperrt 40 % Deckkraft.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 2.1.0 | 07.10.2026 | Neben | Akzentfarbe Apple-Blau (Hauptaktion, Auswahl, Nummern, Links, Rahmen); Auswahl mit Haarlinie ohne Breitenänderung und leuchtenderem Schein; Schatten um Tabellen und bei allen Eingabefeldern; neue Komponenten Schalter (Apple-Grün) und Options-Kapsel statt Checkboxen |
| 2.0.0 | 07.10.2026 | Haupt | Apple-Look: neue Farben (Hellgrau, Weiß, Apple-Dunkel), schwebende Schaltflächen und Suchfelder, Haarlinien, Abstände 12 px; Farbbedeutungen Grün/Auswahl/Rot; neuer Abschnitt „Komponenten“ (u. a. Suchfeld mit Treffer-Navigation); Zusammenarbeit in eigene Datei ausgelagert |
| 1.1.0 | 06.10.2026 | Neben | Neu: Regel „allgemein oder App?“ klären, App-Richtlinien nur mit Abweichungen/Ausprägungen; aus der Reiselogbuch-Richtlinie übernommen: Smiley-Leisten, Erfassungsfenster, Vorschaufenster, Liste in Spalten, Ausgabe-Design, Dateinamen-Muster |
| 1.0.0 | 06.10.2026 | erste Fassung | Zusammenfassung aller bisher vereinbarten allgemeinen Regeln (Stand Reiselogbuch 1.0.0) |
