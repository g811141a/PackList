# Designrichtlinie allgemein

**Version 3.0.1** · Stand 08.10.2026

Allgemeine Gestaltungs- und Bedienregeln für alle iPad-Web-Apps von g811141a.
Diese Datei liegt vorerst im Repo ReiseLogBuch und **wandert später ins Design-Repo**;
ihre Versionsnummer wird dann zur Versionsnummer des Design-Repos.
App-spezifische Regeln stehen in einer eigenen Datei je App
(z. B. `README - Designrichtlinie Reiselogbuch.md`). Regeln zur Zusammenarbeit stehen in
`README - Zusammenarbeit allgemein.md`.

> **Vorbild Apple:** Grundlage sind die Apple Human Interface Guidelines
> ([HIG](https://developer.apple.com/design/human-interface-guidelines)) und die [Apple Design Resources](https://developer.apple.com/design/resources/)
> (Vorlagen mit Maßen). Bei jedem Abschnitt bzw. jeder Komponente steht der Link zur
> passenden Apple-Richtlinie („**Apple:** …“).

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
- Keine Systemfenster (alert/confirm mit „OK“/„Close“) – Abfragen als **Sprechblase** an der
  angetippten Schaltfläche, reine Meldungen in einem kleinen Fenster (Abschnitt 15).
- **Apple-Look** (iPadOS): Hintergrund Hellgrau, Kästen weiß ohne Rand, schwebende Schaltflächen.
- **Aufbau wie Apple-Apps:** links eine **Seitenleiste** mit der zentralen Liste, rechts der
  Inhalt mit einer **Kopfzeile** (Titel in der Mitte, rechts eine Kapsel mit den wichtigsten
  Aktionen; Weiteres im **Mehr-Menü** ellipsis).
- Bewusst verworfen: eigene Kennzeichnung von Pflichtfeldern; harte, schmale Schatten;
  Glas-Leiste (schlechter lesbar).

## 2. Farben

**Apple:** [HIG – Color](https://developer.apple.com/design/human-interface-guidelines/color) · [HIG – Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode)

CSS-Variablen auf `:root`; Dunkelmodus über `data-theme="dark"`. Helligkeitsstufen wie bei
Apple: Hintergrund → Kasten/Fenster → Schaltfläche (im Dunkelmodus Schwarz → Dunkelgrau →
heller).

| Variable | Hell | Dunkel | Verwendung |
|---|---|---|---|
| `--bg` | `#f2f2f7` | `#000000` | Seitenhintergrund, Kopfzeile |
| `--card` | `#ffffff` | `#1c1c1e` | Kästen, Tabelle, Eingabefelder (ohne Rand), Seitenleiste, Menüs (dunkel `#2c2c2e`) |
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
| `--sel-bg` | `#dcebff` | `#10335c` | Fläche eingeschalteter und gedrückter Schaltflächen, Options-Kapseln |
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

- Darstellung Hell/Dunkel in **2 Stufen** (kein „Automatisch“); im Mehr-Menü als
  „Modus dunkel“ (moon) bzw. „Modus hell“ (sun) – der Eintrag zeigt die *Aktion*; die
  Einstellung wird gemerkt. Beim ersten Start gilt die Systemeinstellung.

## 3. Schrift und Abstände

**Apple:** [HIG – Typography](https://developer.apple.com/design/human-interface-guidelines/typography) · [HIG – Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

- Systemschrift `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  17 px, Zeilenhöhe 1,45.
- h1 28 px, h2 20 px, Fenstertitel 19 px zentriert; Hinweise 14 px in `--muted`.
- Seitenrand 16 px bzw. iPad-Safe-Area.
- **Abstand zwischen Schaltflächen 12 px** (wie bei Apple), in Leisten, Reihen und Listen.
- Radien: Schaltflächen und Suchfelder Kapsel (22 px), Icon-Schaltflächen rund,
  Listeneinträge und Kästen 14 px, Eingabefelder 10 px, Tabelle 12 px, Fenster 18 px.
- Trennlinien und Feldränder als Haarlinie (0,5 px); Kästen und Tabelle ohne Rand.
- Keine klassischen Checkboxen: Ein/Aus-Einstellungen als **Schalter**, Optionen beim Erfassen als **Options-Kapsel** (Abschnitt 15).
- **Text steht in Schaltflächen in der Höhe genau mittig zum Icon** (Zeilenhöhe 20 px wie das Icon).

## 4. Schaltflächen

**Apple:** [HIG – Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)

- **Alle Schaltflächen 44 px hoch** (auch lange Texte, Vorschläge, Auswahl-Chips).
  Ausnahmen: mehrzeilige Listeneinträge (z. B. umbrochene Titel) und Textkästen.
- **Reine Icon-, Wetter- und Smiley-Schaltflächen quadratisch 44 × 44 px**;
  Emoji 24 px, Icon 20 px.
- **Alle Schaltflächen und Suchfelder schweben** (Komponente „Schwebende Schaltfläche“):
  Fläche `--btn`, Lichtkante `--btn-rim` (0,5 px), Schatten `--float`, Kapselform;
  Icon-Schaltflächen rund. Text-Schaltflächen: Icon links, dann Text (Abstand 6 px).
- **Mehrere Schaltflächen nebeneinander stehen in einer Kapsel** (Komponente Kapsel).
- **Farben von Schaltflächen** – jede Farbe hat genau eine Bedeutung:
  - **Blau gefüllt = Hauptaktion** – nur **in Fenstern**, höchstens eine je Fenster (z. B.
    Häkchen nach einer Änderung, Teilen in der Vorschau, Backup sichern in der Erinnerung):
    `--accent`, weiße Schrift, Lichtkante, Schatten `--glow-accent`. **Menüs und die Kapsel der
    Kopfzeile werden nicht eingefärbt.**
  - **Blau getönt mit Haarlinie = eingeschaltet** (Umschalt-Schaltflächen wie Wetter,
    Reisemittel, Mikrofon während der Aufnahme): Fläche `--sel-bg`, Haarlinie (0,5 px)
    `--accent`, Schrift normal, Schatten `--glow-accent` (`aria-pressed="true"`). Die Breite
    ändert sich beim Einschalten nicht.
  - **Blau getönt = gedrückt:** Die Schaltfläche, von der ein offenes Menü, eine Sprechblase
    oder ein Fenster kommt, ist so lange `--sel-bg` mit Haarlinie `--accent`, wie es offen ist –
    man sieht, woher man kommt (Klasse `.on`).
  - **Apple-Grün** nur für eingeschaltete **Schalter**.
  - **Rot gefüllt = Löschen/Verwerfen** (endgültige Aktionen, z. B. in Sprechblasen):
    `--danger-fill`, weiße Schrift und Icon, Schatten `--glow-danger`. In Menüs steht
    „… löschen“ als roter Text mit rotem Icon.
  - Alle übrigen Schaltflächen neutral (schwebend).
- „Abbrechen“ (in Sprechblasen): neutral, nur das Icon ban ist rot.
- Gesperrte Schaltflächen: ausgegraut (Deckkraft 40 %).
- Keine Hover-Farbe auf dem iPad – Hover nur in `@media (hover: hover)`.
- Schaltflächen unten rechts (z. B. nach oben / ans Ende): runde schwebende
  Icon-Schaltflächen; ausgeblendet, wenn es nichts zu scrollen gibt.

## 5. Icons

**Apple:** [HIG – Icons](https://developer.apple.com/design/human-interface-guidelines/icons) · [HIG – SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) (im Web nicht erlaubt, daher Lucide)

- Schaltflächen-Icons aus **Lucide** (Liniengrafiken, Strichstärke 2, `currentColor`),
  als SVG eingebettet (offline). SF Symbols dürfen im Web nicht verwendet werden.
- **Inhalte bleiben Emojis** (z. B. Smileys, Wetter, Spaltenköpfe).
- Allgemeine Zuordnung:

| Aktion | Lucide-Icon | Darstellung |
|---|---|---|
| Fertig (Fenster) | `check` | rund, nur Icon; grau, nach einer Änderung weiß auf Blau |
| Abbrechen / Schließen (Fenster) | `x` | rund, nur Icon, links oben |
| Seitenleiste aus-/einblenden | `panel-left` | rund, nur Icon |
| Mehr-Menü | `ellipsis` | nur Icon, in einer Kapsel |
| Einstellungen | `settings` | im Mehr-Menü |
| Neu anlegen | `plus` | nur Icon, in einer Kapsel |
| Teilen / Ausgabe | `share` | **immer nur Icon, nie mit Text** |
| Suchen | `search` | in der Kapsel und im Suchfeld |
| Voriger / nächster Treffer | `chevron-up` / `chevron-down` | nur Icon, als Kapsel |
| Zurück / Weiter (Blättern) | `chevron-left` / `chevron-right` | nur Icon, als Kapsel |
| Abbrechen (Sprechblase) | `ban` | Icon rot, Text normal |
| Löschen / Entfernen / Verwerfen | `trash` | weiß auf Rot (Sprechblase), rot (Menü) |
| Weiter bearbeiten | `pencil` | Icon + Text |
| Backup sichern / laden | `save` / `folder-open` | Icon + Text |
| Vorschau | `eye` | Icon + Text |
| HTML / PDF | `file-code` / `file-text` | Icon + Text |
| Info / Hinweis ein-/ausblenden | `info` | nur Icon |
| Modus dunkel / hell | `moon` / `sun` | im Mehr-Menü, zeigt die Aktion |
| Nach oben / Ans Ende | `arrow-up-to-line` / `arrow-down-to-line` | nur Icon |
| Diktieren | `mic` | nur Icon, pulsiert während der Aufnahme |
| Zurücksetzen | `rotate-ccw` | nur Icon, gedämpft |

- In Menüs stehen die Icons **vor** dem Text.

## 6. Begriffe

- Fenster haben **keine Fußleiste mehr**: links oben ein rundes x, rechts oben ein rundes
  Häkchen (Komponente Fenster-Kopfzeile).
- x = Fenster schließen; wurde etwas geändert, fragt eine Sprechblase „Änderungen
  verwerfen“ / „Weiter bearbeiten“ (die Eingaben bleiben dann erhalten). So macht es auch
  Apple (z. B. Kontakte).
- Häkchen = übernehmen und schließen; ohne Änderung schließt es einfach.
- Bestätigungen immer mit dem Verb der Aktion: „Löschen“, „Entfernen“, „Zurücksetzen“,
  „Ersetzen“, „Änderungen verwerfen“.
- Menüpunkt und Fenster heißen gleich (z. B. „Einstellungen“).
- Systembeschriftungen (z. B. „Reset“ der iPad-Datumsauswahl) bleiben.

## 7. Fenster (Dialoge)

**Apple:** [HIG – Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets) · [HIG – Modality](https://developer.apple.com/design/human-interface-guidelines/modality)

- Aufbau: Kopfzeile (Komponente Fenster-Kopfzeile) · Inhalt (scrollbar).
- Breite passt sich dem Inhalt an: höchstens 90 % der Bildschirmbreite, Mindestbreite
  480 px. Erfassungs- und Vorschaufenster fast bildschirmbreit (bis 1100 px).
- Hintergrund `--dlg-bg`, Kästen darin `--dlg-card`, Radius 18 px, Schatten, abgedunkelter
  Hintergrund dahinter.
- Escape wirkt wie das x.
- Gibt es noch keinen Eintrag, öffnet sich „Neues …“ einmal von selbst; mit x bleibt die
  leere Seite mit grauem Hinweis „Noch kein … angelegt.“.
- **Erfassungsfenster** (Einträge erfassen): fast bildschirmbreit; Kopfzeile x · Titel mit
  Zusatzzeile „Automatisch gespeichert um hh:mm“ · Kapsel [chevron-left | chevron-right] zum
  Blättern · Häkchen; automatisches Speichern (Abschnitt 8).
- **Vorschaufenster**: fast bildschirmbreit, Inhalt immer hell und genau wie die
  ausgegebene Datei; Kopfzeile x · „Vorschau“ mit Dateiname als Zusatzzeile · Kapsel
  [PDF | share blau gefüllt]; nach Teilen bzw. PDF folgt das Ergebnisfenster mit ggf.
  Backup-Erinnerung.
- **Meldung** (ohne Entscheidung, z. B. Fehler): kleines Fenster, x links oben, Titel,
  Text zentriert.
- Technisch: ein Dialog, dessen Inhalt ausgetauscht wird (nicht schließen und neu öffnen);
  ein zweiter Dialog nur für Meldungen.

## 8. Eingaben, Pflichtfelder und Fehlermeldungen

**Apple:** [HIG – Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields) · [HIG – Pickers](https://developer.apple.com/design/human-interface-guidelines/pickers)

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
- Das Häkchen ist grau, bis etwas geändert wurde, dann blau. **Ein Tippen auf das Häkchen
  zeigt alle fehlenden Angaben** (falls etwas fehlt) und scrollt zur ersten.
- **Textfelder wachsen mit dem Inhalt**; man muss nie innerhalb eines Feldes scrollen.
- **Datumsfelder sind so breit wie das Datum** (mit kurzem Abstand zum Kalenderzeichen);
  zwei zusammengehörige Daten mit grauer Beschriftung „Von“ · „Bis“ in einer Zeile.
- **Smiley-Leisten** (Schnellauswahl über einem Textfeld): nur einzeilig, mit dem Finger
  nach links/rechts wischen, Verlauf am Rand als Hinweis auf weitere Smileys,
  Zurücksetzen (rotate-ccw) fest rechts daneben. Sortiert nach Häufigkeit (meistbenutzte
  vorne), nie benutzte in Standardreihenfolge dahinter. Langes Drücken entfernt einen
  Smiley (Sprechblase „Entfernen“, rot); wird er wieder verwendet, kommt er zurück.
  Zurücksetzen stellt die Standard-Smileys her und setzt die Zähler auf null (Sprechblase
  „Zurücksetzen“, rot). Ein angetippter Smiley wird angehängt, wenn der Cursor in einer leeren Zeile
  oder hinter Smileys steht, sonst beginnt eine neue Zeile.
- Diktieren über eine mic-Schaltfläche am Textfeld (sonst Hinweis auf die Mikrofon-Taste).
- Automatisches Speichern alle 10 Sekunden in Erfassungsfenstern; „Änderungen verwerfen“
  (über x) stellt den Zustand beim Öffnen wieder her.
- Zahlenfelder rechtsbündig, Tausenderpunkt schon beim Tippen.

## 9. Tabellen (App, HTML und PDF)

**Apple:** [HIG – Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)

- Kopfzeile grau (`--th-bg`) mit Rändern `--th-line`; die Tabelle selbst ohne äußeren Rand,
  mit Schatten `--table-shadow`, damit die seitlichen Grenzen gut zu sehen sind.
- Jede 2. sichtbare Zeile heller (Zebra); gezählt werden nur sichtbare Zeilen; eine
  markierte Zeile bleibt gelb.
- Trennlinien zwischen allen Spalten.
- Tabellenkopf bleibt beim Scrollen direkt unter der Kopfzeile stehen.
- Nur zwischen ganzen Wörtern umbrechen (die Spalte wird so breit wie das längste Wort).
- Spaltenbreiten passen sich dem Inhalt an; kompakte Tabellen nur so breit wie nötig;
  Zahlenspalten rechtsbündig (Überschrift und Werte).
- Hängender Einzug: Folgezeilen beginnen unter dem Text, nicht unter Aufzählungszeichen
  oder Emoji.
- Links ohne Unterstreichung.
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
- Sicherheitsabfrage (Sprechblase) vor jeder Lösch-, Ersetz- oder Rücksetz-Aktion.
- **Backup einmal am Tag:** Wurde heute noch nicht gesichert, steht unten in der
  Seitenleiste dezent „Heute noch kein Backup gesichert. Zuletzt gesichert am …“ mit der
  Schaltfläche „Backup sichern“; nach einer Ausgabe erinnert das Ergebnisfenster daran. Nur
  ein abgeschlossenes Teilen-Menü zählt als Backup.

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
- **Apple:** [HIG – Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)
- **Zweck:** jede Aktion. **Technisch:** `button` (Hauptaktion `.primary`, Löschen
  `.danger`, eingeschaltet `aria-pressed="true"`, nur Icon `.iconbtn`).
- **Aufbau:** Icon (20 px) links, dann Text; oder nur Icon bzw. Emoji (24 px).
- **Maße:** 44 px hoch, Kapsel (Radius 22 px); Icon-/Emoji-Schaltflächen 44 × 44 rund;
  Abstand zu Nachbarn 12 px.
- **Aussehen/Zustände:** neutral `--btn` + Lichtkante + `--float`; Hauptaktion,
  eingeschaltet und Löschen siehe Abschnitt 4; gesperrt 40 % Deckkraft.

### 15.2 Suchfeld
- **Apple:** [HIG – Search fields](https://developer.apple.com/design/human-interface-guidelines/search-fields)
- **Zweck:** Suchen in der aktuellen Ansicht. **Technisch:** `.searchbox`, `.navgrp`.
- **Aufbau:** Lupe (search) · Eingabe „Suchen“ · Trefferanzeige · x-Schaltfläche;
  rechts daneben Kapsel-Gruppe chevron-up / chevron-down.
- **Maße:** 44 px hoch, Kapsel; in der zweiten Zeile der Kopfzeile über die volle Breite,
  Treffer-Navigation immer am rechten Rand; Abstand 12 px.
- **Aussehen:** wie die schwebende Schaltfläche; Lupe, Trefferanzeige grau; x als grauer
  Kreis mit weißem Kreuz.
- **Zustände:**
  - leer: nur Lupe und Platzhalter, Pfeile ausgegraut
  - mit Treffern: rechtsbündig „3 von 57“ (ohne das Wort „Treffer“), x; Navigation
    sichtbar; am ersten Treffer chevron-up ausgegraut, am letzten chevron-down
  - ohne Treffer: rechtsbündig „0“, beide Pfeile ausgegraut
- **Verhalten:** Suche beim Tippen; jede Markierung ist ein Treffer; der erste wird
  angesprungen. Treffer gelb (`--mark`), Treffer im Fokus hellorange (`--mark-cur`) und in
  die Bildmitte gescrollt. Pfeile und Eingabetaste springen weiter, ohne Umlauf vom letzten
  zum ersten. x löscht die Eingabe, der Cursor bleibt im Feld. Gefiltert wird auf Einträge
  mit Treffern.

### 15.3 Kopfzeile
- **Apple:** [HIG – Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)
- **Zweck:** oberste Zeile des Inhalts. **Technisch:** `.nb`.
- **Aufbau:** links panel-left (nur wenn die Seitenleiste ausgeblendet ist) · Titel in der
  Mitte (17 px, fett) · rechts eine Kapsel mit den wichtigsten Aktionen, zuletzt ellipsis
  (Mehr-Menü). Suche: search in der Kapsel blendet eine **zweite Zeile** mit dem Suchfeld
  über die volle Breite ein, Treffer-Navigation rechts.
- **Verhalten:** bleibt beim Scrollen oben stehen (Hintergrund `--bg`, beim Scrollen
  Haarlinie unten); keine Glas-Leiste.

### 15.4 Seitenleiste
- **Apple:** [HIG – Sidebars](https://developer.apple.com/design/human-interface-guidelines/sidebars)
- **Zweck:** zentrale Liste der App. **Technisch:** `#side`.
- **Aufbau:** Kopf: Überschrift (20 px, fett, linksbündig) · Kapsel [plus | ellipsis] ·
  runde Schaltfläche panel-left (ausblenden). Darunter die Einträge: Titel fett, darunter
  grau Zeitraum · Status; gewählter Eintrag blau gefüllt (wie eine Hauptaktion). Unten
  dezente Hinweise (z. B. Backup).
- **Maße:** so breit wie Kopf bzw. längster Titel, 340–420 px; Hintergrund `--card`,
  Haarlinie rechts.
- **Verhalten:** quer fest links neben dem Inhalt, mit panel-left aus- und einblendbar
  (wird gemerkt); im Hochformat über den Inhalt gelegt (abgedunkelt dahinter), schließt sich
  nach der Auswahl.
- **Mehr-Menü der Seitenleiste:** Backup sichern (darunter grau „Zuletzt gesichert am …“) ·
  Backup laden · ganz unten grau die Versionszeile „<App> · Version X.Y.Z · erstellt am …“.

### 15.5 Kapsel
- **Apple:** [HIG – Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars)
- Mehrere Schaltflächen in einer schwebenden Kapsel (44 px hoch, je Icon 48 px breit);
  Text-Schaltflächen darin mit Innenabstand 14 px. Technisch `.grp` (`.navgrp`).

### 15.6 Menü
- **Apple:** [HIG – Menus](https://developer.apple.com/design/human-interface-guidelines/menus)
- **Zweck:** weitere Aktionen hinter ellipsis bzw. Auswahl hinter einer Schaltfläche.
  **Technisch:** `.menu` (öffnen mit `openMenu`).
- **Aussehen:** Karte 340 px, Radius 14 px, Lichtkante und Schatten wie die Schaltflächen;
  Einträge 46 px hoch, Icon **vor** dem Text, Haarlinien; Gruppen durch 8 px Abstand
  getrennt; Auswahl mit blauem Häkchen vorne; graue Zusatzzeile unter einem Eintrag; graue
  Notiz ganz unten. Nichts blau eingefärbt, „… löschen“ rot.
- **Verhalten:** erscheint unter der Schaltfläche (darf über die Seitenleiste
  hinausragen); die Schaltfläche ist so lange gedrückt (blau getönt); daneben tippen schließt.

### 15.7 Sprechblase (Abfrage)
- **Apple:** [HIG – Popovers](https://developer.apple.com/design/human-interface-guidelines/popovers) · [HIG – Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets) · [HIG – Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)
- **Zweck:** jede Abfrage mit Entscheidung. **Technisch:** `.pop` (`confirmPop`).
- **Aufbau:** grauer Text · rote Schaltfläche mit dem Verb der Aktion · darunter der Weg
  zurück („Abbrechen“ mit rotem ban bzw. „Weiter bearbeiten“ mit pencil); Breite 320 px.
- **Verhalten:** an der angetippten Schaltfläche (diese ist gedrückt); daneben tippen bricht ab.

### 15.8 Fenster-Kopfzeile
- **Apple:** [HIG – Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)
- **Aufbau:** links rundes x (44 × 44) · Mitte Titel (19 px) mit grauer Zusatzzeile (13 px) ·
  rechts ggf. eine Kapsel und das runde Häkchen. Häkchen grau, nach einer Änderung blau
  gefüllt. Technisch `dlgHead()`.

### 15.9 Fenster
- **Apple:** [HIG – Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)
- Typen: **Bearbeiten** (z. B. Neu, Einstellungen), **Erfassung**, **Vorschau**, **Meldung**
  – Aufbau und Verhalten siehe Abschnitt 7.

### 15.10 Kasten (Schritt)
- **Apple:** [HIG – Boxes](https://developer.apple.com/design/human-interface-guidelines/boxes)
- Fläche `--dlg-card` bzw. `--card`, Radius 14 px, ohne Rand, Innenabstand 14 px;
  Kopfzeile mit blauer Schritt-Nummer, Titel, rechts Options-Kapseln und Icon-Schaltflächen.

### 15.11 Eingabefeld mit Fehlermeldung
- **Apple:** [HIG – Text fields](https://developer.apple.com/design/human-interface-guidelines/text-fields)
- Fläche weiß bzw. `--dlg-field`, Lichtkante `--btn-rim` und Schatten `--float` wie die
  schwebenden Schaltflächen (auch Zahlenfelder wie Gesamtkosten), Radius 10 px, 44 px hoch
  (Textfelder mehrzeilig); Fehler: 1 px roter Rand und rote Meldung darunter
  (Abschnitt 8). Textfelder wachsen mit dem Inhalt; Datumsfelder so breit wie das Datum.

### 15.12 Smiley-Leiste
- **Apple:** [HIG – Collections](https://developer.apple.com/design/human-interface-guidelines/collections)
- Siehe Abschnitt 8; Smileys als runde schwebende 44 × 44-Schaltflächen, Abstand 12 px.

### 15.13 Tabelle
- **Apple:** [HIG – Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)
- Siehe Abschnitt 9.

### 15.14 Info-Icon mit Hinweis
- **Apple:** [HIG – Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons)
- Runde Icon-Schaltfläche `info`; ein Tippen blendet einen grauen Hinweis ein bzw. aus.

### 15.15 Schalter (Einstellungen ein/aus)
- **Apple:** [HIG – Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles)
- **Zweck:** Ein/Aus-Einstellungen, z. B. in Bearbeiten-Fenstern. **Technisch:** `.swlist`,
  `label.check.sw` mit `input[type=checkbox]`.
- **Aufbau:** Zeile mit Text links und Apple-Schalter rechts; Zeilen 52 px hoch, dazwischen
  Haarlinie; Schalter 51 × 31 px, weißer Knopf.
- **Zustände:** ein = `--sw-on` (Apple-Grün), Knopf rechts; aus = `--sw-off`, Knopf links;
  gesperrt 40 % Deckkraft (Text und Schalter). Kein Schein.

### 15.16 Options-Kapsel (Optionen beim Erfassen)
- **Apple:** [HIG – Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles)
- **Zweck:** einzelne Ein/Aus-Optionen in der Kopfzeile eines Kastens. **Technisch:**
  `label.check.chip` mit verstecktem `input[type=checkbox]`.
- **Aussehen:** wie eine schwebende Schaltfläche (Kapsel, 44 px, Schrift 15 px); ein =
  `--sel-bg`, Haarlinie `--accent`, Schein `--glow-accent` und **Häkchen in Akzentfarbe vor
  dem Text**; aus = neutral ohne Häkchen; gesperrt 40 % Deckkraft.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 3.0.1 | 08.10.2026 | Korrektur | Links zu den Apple Human Interface Guidelines bei den Abschnitten und bei jeder Komponente |
| 3.0.0 | 08.10.2026 | Haupt | Neues Bedienkonzept wie Apple-Apps: Seitenleiste, Kopfzeile mit Kapsel und Mehr-Menü, Suche als zweite Zeile; Fenster ohne Fußleiste mit rundem x und Häkchen (grau bis zur Änderung); Abfragen als Sprechblase, „Änderungen verwerfen“ beim x; gedrückte Schaltfläche blau getönt; Hauptaktion nur in Fenstern blau; share immer ohne Text; Icons in Menüs vor dem Text; Text mittig zum Icon; Textfelder wachsen mit; Datumsfelder so breit wie das Datum; Backup-Hinweis einmal am Tag; neue Komponenten Kopfzeile, Seitenleiste, Kapsel, Menü, Sprechblase, Fenster-Kopfzeile |
| 2.1.0 | 07.10.2026 | Neben | Akzentfarbe Apple-Blau (Hauptaktion, Auswahl, Nummern, Links, Rahmen); Auswahl mit Haarlinie ohne Breitenänderung und leuchtenderem Schein; Schatten um Tabellen und bei allen Eingabefeldern; neue Komponenten Schalter (Apple-Grün) und Options-Kapsel statt Checkboxen |
| 2.0.0 | 07.10.2026 | Haupt | Apple-Look: neue Farben (Hellgrau, Weiß, Apple-Dunkel), schwebende Schaltflächen und Suchfelder, Haarlinien, Abstände 12 px; Farbbedeutungen Grün/Auswahl/Rot; neuer Abschnitt „Komponenten“ (u. a. Suchfeld mit Treffer-Navigation); Zusammenarbeit in eigene Datei ausgelagert |
| 1.1.0 | 06.10.2026 | Neben | Neu: Regel „allgemein oder App?“ klären, App-Richtlinien nur mit Abweichungen/Ausprägungen; aus der Reiselogbuch-Richtlinie übernommen: Smiley-Leisten, Erfassungsfenster, Vorschaufenster, Liste in Spalten, Ausgabe-Design, Dateinamen-Muster |
| 1.0.0 | 06.10.2026 | erste Fassung | Zusammenfassung aller bisher vereinbarten allgemeinen Regeln (Stand Reiselogbuch 1.0.0) |
