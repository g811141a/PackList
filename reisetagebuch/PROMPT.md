# Reisetagebuch – Prompt (Stand 04.10.2026, Version 4)

```text
Baue mir ein einfaches Reisetagebuch als Web-App für das iPad.

ZIEL
Ein Tagebuch in Tabellenform, genau wie in meinem Beispiel:

  Reisetagebuch – <Titel>
  Reiseteilnehmer:  Gerhild & Arnold
  Reisezeitraum:    24.08.2026 - 11.11.2026
  Reisemittel:      ✈️ Flugzeug, 🚗 PKW

  | Tag             | Programm            | 🙂☹️😉              | 😴💤 (Quartier)            |
  | Mo, 24.08. 🌤   | Anreise nach Wien   | ☹️ Kurzer Kommentar | Prize by Radisson, Wien    |

  Fazit
  Gesamtkosten: € 0,-

RAHMEN
- Läuft nur auf dem iPad, nur ich nutze es (kein Teilen, kein Login).
- Nur Text, Icons und Smileys – keine Fotos.
- Daten bleiben lokal auf dem iPad.
- Auch offline nutzbar.
- Oberfläche auf Deutsch, schlicht und klar.
- Web-App, die man über Safari zum Home-Bildschirm hinzufügt.
- Bereitstellung über GitHub Pages (Repo wird öffentlich, die Einträge
  bleiben trotzdem nur auf dem iPad).
- Dunkelmodus manuell umschaltbar, 3 Stufen: Automatisch / Hell / Dunkel.
  Die letzte Einstellung wird gemerkt.

REISEN
- Es wird immer an einer Reise gearbeitet.
- Beim Start öffnet die App automatisch die Reise, in deren Zeitraum
  das heutige Datum fällt.
- Fällt heute in keine Reise, öffnet die App die zuletzt beendete Reise.
  Gibt es noch keine beendete Reise, öffnet die nächste geplante Reise.
- Eine neue Reise wird bewusst neu angelegt.
- Allgemeine Reisedaten: Titel, Reiseteilnehmer, Reisezeitraum,
  darunter Reisemittel per Antippen, Mehrfachauswahl möglich,
  in dieser Reihenfolge:
  🚗 PKW · 🚆 Zug · 🚲 Fahrrad · ✈️ Flugzeug · 🚙 Leihwagen · 🚢 Schiff · 🚐 Wohnmobil · 🚶 Fuß
  Die gewählten Reisemittel werden mit Icons ausgegeben.
- Option "Quartierliste in der Ausgabe": beim Anlegen der Reise
  wählbar und nachträglich änderbar.
- Reisezeiträume dürfen sich nicht überschneiden (Hinweis, Speichern
  erst nach Korrektur möglich).
- Frühere Reisen bleiben gespeichert und können jederzeit wieder
  geöffnet und geändert werden.
- Reisen können gelöscht werden, nur nach einer Sicherheitsabfrage.

HAUPTANSICHT (TABELLE)
- Für jeden Tag im Zeitraum gibt es eine Zeile ("Mo, 24.08.").
- Beim Öffnen scrollt die App zum ersten nicht erfassten Tag der Reise
  (die erste Lücke, auch wenn spätere Tage schon erfasst sind) und
  markiert diese Zeile.
- Die obere Leiste mit den Schaltflächen bleibt beim Scrollen fixiert.
- Unten rechts übereinander die Schaltflächen ⬆️ (nach oben) und ⬇️ (ans
  Ende), im gleichen Aussehen wie die Dunkel-Schaltfläche, ohne Schatten.
- Schaltfläche zum Aus-/Einblenden der leeren Tage; die letzte
  Einstellung wird gemerkt.
- Dezente Fortschrittsanzeige, z. B. "Tag 42 von 80 · 38 erfasst".
- Vergangene Tage ohne Eintrag werden dezent markiert.
- Suche über die Einträge (Programm, Kommentar, Quartier), nur innerhalb
  der aktuellen Reise.
- Mehrzeilige Einträge mit hängendem Einzug: Bricht eine Zeile um,
  beginnt die Fortsetzung genau unter dem Text, nicht unter dem ▫️
  bzw. dem Smiley.

ERFASSUNG – wenig eingeben, in ganz einfachen Schritten
- Tag antippen → Erfassungsmaske.
- Titelzeile mit Wochentag und vollem Datum, z. B. "Sonntag, 04.10.2026".
- Die Eingabefelder bleiben schlicht (ohne Aufzählungszeichen); die
  saubere Formatierung erfolgt in Tabelle, HTML und PDF.
- 4 Schritte:
  1. Wetter: Symbole antippen, auch mehrere: ☀️ 🌤 🌦 🌧 ☁️ ⛈ ❄️
  2. Programm: eine Zeile pro Punkt; mehrere Zeilen bekommen in Tabelle
     und Ausgabe ▫️ davor.
     Vorschläge zum Antippen: "Weiterfahrt nach …", "Rundgang durch …",
     "Besichtigung …", "Freetour …". Angetippt wird der Text als neue
     Zeile eingefügt; die "…" sind nur Platzhalter und werden nicht
     übernommen.
  3. Wie war's: Smiley + kurzer Text; mehrere Smiley-Zeilen möglich.
     Alle Smileys möglich (iPad-Emoji-Tastatur).
     Schnellauswahl über dem Textfeld:
     - Sortiert nach Häufigkeit (meistbenutzt vorne), noch nie benutzte
       in Standardreihenfolge dahinter.
     - Langes Drücken entfernt einen Smiley (mit Sicherheitsabfrage).
       Wird er später wieder verwendet, kommt er automatisch zurück.
     - Reset-Icon (nur Symbol) stellt die Standard-Smileys wieder her
       und setzt alle Zähler auf null (mit Sicherheitsabfrage).
  4. Quartier: Name eintragen.
     Häkchen "Quartier wie Vortag": nur wenn gesetzt, wird das Quartier
     vom Vortag übernommen. Sonst bleibt das Feld leer.
     Optionales Feld "Ort für Google Maps" (z. B. "Cairns, Australien"),
     macht den Maps-Link treffsicherer, wird nicht ausgegeben.
- Diktieren: eigenes 🎤-Symbol an den Textfeldern, wenn das iPad es
  unterstützt; sonst ein Hinweis auf die Mikrofon-Taste der Tastatur.
- Automatisches Speichern alle 10 Sekunden während der Erfassung.
- Mit "Vortag / Nächster" direkt zum nächsten Tag blättern.
- Ein Tag gilt als erfasst, sobald mindestens ein Feld ausgefüllt ist.

QUARTIER-SPALTE
- Der Quartiersname wird automatisch zu einem funktionierenden
  Google-Maps-Link (Name + ggf. Ort).

ABSCHLUSS
- Freitextfeld "Fazit".
- Ein Feld "Gesamtkosten" in Euro, immer ganze Euro. Der Tausenderpunkt
  erscheint schon beim Tippen ("4.850"), Ausgabe z. B. als "€ 4.850,-".

AUSGABE
- Ein Knopf "Ausgabe", danach Wahl zwischen HTML oder PDF.
- Gespeichert wird über einen iOS-Kurzbefehl "Reisetagebuch speichern":
  Die App legt Ausgabe + Backup in die Zwischenablage und startet den
  Kurzbefehl. Er speichert ohne Rückfrage in iCloud Drive → Reisetagebuch
  (alles in einem Ordner) und erzeugt das PDF direkt (ohne Drucken-Menü).
  Danach manuell über den App-Umschalter zurück zur App.
- Notlösung, falls der Kurzbefehl fehlt oder nicht reagiert: Speichern
  über das Teilen-Menü ("In Dateien sichern"), PDF über das Drucken-Menü.
- Anleitung zum Einrichten des Kurzbefehls als Hilfe in der App
  (Reisen → Hilfe), inkl. Testknopf.
- Jederzeit möglich, auch mitten in der Reise (Zwischenstand).
- Überschrift "Reisetagebuch – <Titel>".
- Nur erfasste Tage, keine leeren Tage, keine Wetter-Platzhalter.
- Die Google-Maps-Links funktionieren in beiden Formaten.
- Spaltenbreiten passen sich dem Inhalt an.
- Hängender Einzug bei Aufzählungen und Smiley-Zeilen.
- Reihenfolge am Ende:
  1. Fazit
  2. Gesamtkosten
  3. Statistik: Reisetage gesamt und davon erfasst, Anzahl der
     Quartiere, Wetter-Verteilung (z. B. "🌤 40× · ☀️ 12× · 🌧 5×"),
     die drei häufigsten Smileys
  4. Quartierliste (Quartier, Zeitraum, Anzahl Nächte, Maps-Link),
     falls bei der Reise aktiviert
  5. Dezent als letzte Zeile:
     "Ausgabe V003 erstellt am TT.MM.JJJJ um hh:mm"
- Dateiname mit fortlaufender Versionsnummer (ein gemeinsamer Zähler
  pro Reise für HTML und PDF, im Backup enthalten):
  "JJJJ.MM.TT-JJJJ.MM.TT <Reisetitel> V001"
  z. B. "2026.08.24-2026.11.11 Australien V003.pdf"

SICHERHEIT
- Backup als Datei exportieren/importieren, enthält alle Reisen.
- Bei jeder Ausgabe wird automatisch auch ein Backup gespeichert
  (über den Kurzbefehl im selben Ordner), mit Hinweis, wo es liegt.
- Die App meldet ehrlich, dass der Kurzbefehl gestartet wurde – ob er
  wirklich gespeichert hat, kann sie nicht prüfen.
- Der Knopf "Backup sichern" bleibt zusätzlich bestehen.
- Backup-Dateiname (ohne Versionszähler):
  "Ω Backup Reisetagebuch JJJJ.MM.TT hh.mm"
  z. B. "Ω Backup Reisetagebuch 2026.10.04 14.35.json"
```
