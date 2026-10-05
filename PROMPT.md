# Reiselogbuch – Prompt (Stand 05.10.2026, Version 16)

```text
Baue mir ein einfaches Reiselogbuch als Web-App für das iPad.

ZIEL
Ein Tagebuch in Tabellenform, genau wie in meinem Beispiel:

  Reiselogbuch – <Titel>
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
- Bereitstellung über GitHub Pages aus dem Repo "ReiseLogBuch" (Branch
  main, Hauptordner): https://g811141a.github.io/ReiseLogBuch/
  (Repo öffentlich, die Einträge bleiben trotzdem nur auf dem iPad).
- Darstellung Hell / Dunkel (2 Stufen), die Schaltfläche zeigt die Aktion
  (🌙 bei Hell, ☀️ bei Dunkel). Die letzte Einstellung wird gemerkt.
- Alle Meldungen und Sicherheitsabfragen in eigenen Fenstern mit deutschen
  Schaltflächen (keine iPad-Systemfenster mit "Close"/"OK").
- Alle Aktionen sind echte Schaltflächen (kein reiner Text als Link).
- Einheitliche Bezeichnungen:
  - "Fertig" = Eingaben übernehmen und schließen
  - "Abbrechen" = ohne Änderung schließen / Vorgang nicht ausführen
  - "Schließen" = Fenster ohne Eingaben schließen (Info, Liste, Meldung)
  - Bestätigung immer mit dem Verb der Aktion: "Löschen", "Entfernen",
    "Zurücksetzen", "Ersetzen"
  - "💾 Backup sichern", "📂 Backup laden", "‹ Vortag" / "Folgetag ›"
- Schaltflächen-Icons aus dem Set Lucide (Liniengrafiken, direkt in die App
  eingebettet, offline). Inhalte (Smileys, Wetter, Reisemittel, Essen-Leiste,
  📍, Spaltenköpfe) bleiben Emojis. Zuordnung:
  Reiselogbücher book-open · Leere Tage aus fold-vertical · Leere Tage ein
  list-chevrons-up-down · Dunkel/Hell moon/sun (nur Icon) · Ausgabe share ·
  Suchen search · Nach oben/Ans Ende arrow-up-to-line/arrow-down-to-line
  (nur Icon) · Fertig check (weiß auf Grün) · Abbrechen ban (rot) ·
  Schließen x · Backup sichern save · Backup laden folder-open · Neues
  Reiselogbuch plus · Bearbeiten pencil (nur Icon) · Löschen trash (rot) ·
  Diktieren mic (nur Icon) · Vortag/Folgetag chevron-left/chevron-right ·
  HTML-Datei file-code · PDF file-text · Smileys zurücksetzen rotate-ccw
  (nur Icon)
- Begriffe: "🧳 Reiselogbücher" (Liste, Fenstertitel "Reiselogbücher"),
  "＋ Neues Reiselogbuch anlegen", "Reiselogbuch bearbeiten",
  "🗑 Reiselogbuch löschen", Überschrift "Reiselogbuch – <Titel>" (App und
  Ausgabe). Die App heißt "Reiselogbuch"; der Begriff "Reisetagebuch"
  kommt nicht mehr vor.
- Die "Reset"-Schaltfläche der iPad-Datumsauswahl bleibt (Systembeschriftung).
- Einheitliche Fußleiste in allen Fenstern: links "Abbrechen", rechts
  "Fertig" bzw. "Schließen"; "Löschen" separat in Rot. Oben nur Titel
  (bei der Tageserfassung zusätzlich "‹ Vortag" / "Folgetag ›").

REISEN
- Es wird immer an einer Reise gearbeitet.
- Beim Start öffnet die App automatisch die Reise, in deren Zeitraum
  das heutige Datum fällt.
- Fällt heute in keine Reise, öffnet die App die zuletzt beendete Reise.
  Gibt es noch keine beendete Reise, öffnet die nächste geplante Reise.
- Eine neue Reise wird bewusst neu angelegt.
- Reisen-Liste (🧳 Reisen): Antippen öffnet die Reise, ✏️ in derselben
  Zeile öffnet "Reise bearbeiten". "🗑 Reise löschen" als rote
  Schaltfläche in der Bearbeiten-Maske.
- Reisezeitraum: Liegt das Bis-Datum vor dem Von-Datum, wird es auf das
  Von-Datum gesetzt – und umgekehrt.
- Allgemeine Reisedaten: Titel, Reiseteilnehmer, Reisezeitraum,
  darunter Reisemittel per Antippen, Mehrfachauswahl möglich,
  in dieser Reihenfolge:
  🚗 PKW · 🚆 Zug · 🚲 Fahrrad · ✈️ Flugzeug · 🚙 Leihwagen · 🚢 Schiff · 🚐 Wohnmobil · 🚶 Fuß
  Die gewählten Reisemittel werden mit Icons ausgegeben.
- Option "Quartierliste in der Ausgabe": beim Anlegen der Reise
  wählbar und nachträglich änderbar.
- Option "🍽️ Spalte Essen und Trinken": beim Anlegen/Bearbeiten ein- und
  ausschaltbar, Standard aus. Die Spalte steht vor dem Quartier (App und
  Ausgabe), Spaltenkopf 🍽️🍷☕️. Beim Ausschalten bleiben vorhandene Einträge erhalten.
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
  Reihenfolge: 🧳 Reiselogbücher · Leere Tage · Darstellung · 📤 Ausgabe · Suche.
- Unten rechts übereinander die Schaltflächen ⬆️ (nach oben) und ⬇️ (ans
  Ende), im gleichen Aussehen wie die Dunkel-Schaltfläche, ohne Schatten.
- Schaltfläche zum Aus-/Einblenden der leeren Tage, zeigt die Aktion:
  "⤴️ Leere Tage aus" bzw. "⤵️ Leere Tage ein"; die letzte Einstellung
  wird gemerkt.
- Dezente Fortschrittsanzeige, z. B. "Tag 42 von 80 · 38 erfasst".
- Vergangene Tage ohne Eintrag werden dezent markiert.
- Suche über die Einträge (Programm, Kommentar, Quartier), nur innerhalb
  der aktuellen Reise. Treffer werden im Text gelb hinterlegt.
- Tabellendesign (gilt für alle Tabellen in App, HTML und PDF):
  - Kopfzeile leicht grau hinterlegt (#d9d9d9), Zellenränder darin zwei
    Stufen dunkler (#a5a5a5); im Dunkelmodus Kopfzeile #3b3a37 mit
    helleren Rändern (#625f5a), damit sie sichtbar sind
  - jede 2. Tageszeile heller grau (#f5f5f5, dunkel #2e2d2a); gezählt
    werden nur die sichtbaren Zeilen; die markierte Lücke bleibt gelb
  - Trennlinien zwischen allen Spalten
  - äußere Tabellenumrandung in der Farbe der Kopfzeilen-Ränder
  - die Statistik bleibt eine schlichte Liste
  - Quartierliste kompakt (Breite passt sich dem Inhalt an), "Nächte"
    rechtsbündig (Überschrift und Werte)
  - keine Hover-Farbe auf dem iPad (bleibt sonst nach dem Antippen hängen)
- Mehrzeilige Einträge mit hängendem Einzug: Bricht eine Zeile um,
  beginnt die Fortsetzung genau unter dem Text, nicht unter dem ▫️
  bzw. dem Smiley.

ERFASSUNG – wenig eingeben, in ganz einfachen Schritten
- Tag antippen → Erfassungsmaske (fast bildschirmbreit, damit weniger
  gescrollt werden muss). Checkbox-Texte in normaler Schrift.
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
  3. Wie war was?: Smiley + kurzer Text; mehrere Smiley-Zeilen möglich.
     Alle Smileys möglich (iPad-Emoji-Tastatur).
     Schnellauswahl über dem Textfeld:
     - Sortiert nach Häufigkeit (meistbenutzt vorne), noch nie benutzte
       in Standardreihenfolge dahinter.
     - Langes Drücken entfernt einen Smiley (mit Sicherheitsabfrage).
       Wird er später wieder verwendet, kommt er automatisch zurück.
     - Reset-Icon (nur Symbol) stellt die Standard-Smileys wieder her
       und setzt alle Zähler auf null (mit Sicherheitsabfrage).
  4. Essen und Trinken (nur wenn die Spalte aktiviert ist): wie "Wie war was?", eine
     Zeile pro Lokal im Format "Smiley(s) Name – Kommentar", z. B.
     "🕛😋 Hard Rock Café – Steak war super". Eigene Smiley-Leiste mit
     eigener Häufigkeit, Entfernen (lange drücken) und ↺, Standard:
     🕗 🕙 🕛 🕒 🕕 😋 👌 👍 😕 🤮 👎 ⭐️ 🍕 🍔 🥩 🍷 🍺 ☕️
     Darstellung "🕛😋 📍Hard Rock Café – Steak war super": 📍 ist nur
     Zeichen, nur der Name des Lokals (bis einschließlich letztem
     Buchstaben) ist der Link, ab dem Bindestrich normaler Text.
     Smileys und 📍 bilden gemeinsam die linke Spalte: bei einem Umbruch
     beginnt die Folgezeile genau unter dem Namen (wie beim Quartier).
     Checkbox "keinen Google-Maps Link" rechts in der Kopfzeile des
     Schritts: zeigt den Zustand der Zeile mit dem Cursor und setzt bzw.
     entfernt dort ein "⊘" am Zeilenanfang; diese Zeile erscheint ohne 📍
     und ohne Link. Suche: Name + Ort des
     Quartiers, ohne Ort nur der Name.
     Essen wird bei der Suche gefunden, zählt nicht als "erfasst" und
     erscheint nicht in der Statistik. Keine Restaurantliste.
  5. Quartier: Name eintragen.
     Kopfzeile des Blocks: "☐ Quartier wie Vortag  ☐ keinen Google-Maps
     Link" (am ersten Reisetag nur die zweite Checkbox).
     Häkchen "Quartier wie Vortag": nur wenn gesetzt, wird das Quartier
     vom Vortag übernommen. Sonst bleibt das Feld leer.
     Checkbox "keinen Google-Maps Link" rechts in der Kopfzeile des
     Schritts (wie bei Essen): Name ohne 📍 und ohne Link (wird bei
     "Quartier wie Vortag" mit übernommen). "In Google Maps prüfen" ist
     nicht unterstrichen.
     Optionales Feld "Ort für Google Maps" (z. B. "Cairns, Australien"),
     macht den Maps-Link treffsicherer und wird nach einem Komma hinter
     dem Hotelnamen angezeigt ("📍Prize by Radisson, Wien") – überall
     (Tagestabelle, Quartierliste, App und Ausgabe); Teile des Ortes, die
     schon im Namen stehen, entfallen.
- Mehrere Smileys pro Zeile (Wie war was?, Essen, Fazit): Ein angetippter
  Smiley wird angehängt, wenn der Cursor in einer leeren Zeile oder direkt
  hinter Smileys steht; steht er hinter Text, beginnt eine neue Zeile.
  Alle führenden Smileys stehen in Tabelle und Ausgabe zusammen vorne,
  der Text rückt daneben ein.
- Diktieren: eigenes 🎤-Symbol an den Textfeldern, wenn das iPad es
  unterstützt; sonst ein Hinweis auf die Mikrofon-Taste der Tastatur.
- Automatisches Speichern alle 10 Sekunden während der Erfassung.
- Mit "‹ Vortag" / "Folgetag ›" direkt weiterblättern.
- Ein Tag gilt als erfasst, sobald mindestens ein Feld ausgefüllt ist.

QUARTIER-SPALTE
- Der Quartiersname wird automatisch zu einem funktionierenden
  Google-Maps-Link. 📍 ist nur Zeichen, Link ist nur der Hotelname bis vor den ersten
  Bindestrich oder das erste Komma ("📍Santai Resort - Kingscliff",
  "📍Cascade Gardens, Cairns"); gesucht wird mit dem ganzen Eintrag plus
  optionalem Ort.
- Gleiche Darstellung in Tagestabelle und Quartierliste, in App und
  Ausgabe (überall mit 📍).

ABSCHLUSS
- Fazit: Antippen öffnet eine eigene Erfassungsmaske wie "Wie war was?"
  (Smiley-Schnellauswahl mit gemeinsamer Häufigkeits-Sortierung, lange
  drücken/Reset, 🎤 Diktieren, automatisches Speichern alle 10 Sekunden).
  Darstellung in App und Ausgabe mit hängendem Einzug.
- Unter Fazit und Gesamtkosten zeigt auch die App die Quartierliste und
  danach die Statistik (Quartierliste in der App immer, in der Ausgabe nur
  mit Häkchen).
- Der Fazit-Kasten in der App passt sich in der Breite dem Inhalt an.
- Ein Feld "Gesamtkosten" in Euro (rechtsbündig, schmal – "99.999" muss
  sichtbar sein), immer ganze Euro. Der Tausenderpunkt
  erscheint schon beim Tippen ("4.850"), Ausgabe z. B. als "€ 4.850,-".

AUSGABE
- Ein Knopf "Ausgabe", danach Wahl zwischen HTML oder PDF.
- HTML: Speichern über das Teilen-Menü ("In Dateien sichern", Ordner
  frei wählbar).
- PDF: direkt über das Drucken-Menü von Safari (dort Teilen → "In Dateien
  sichern"); der Dateiname wird als Seitentitel vorgeschlagen.
- Die App meldet ehrlich, dass sie das Teilen- bzw. Drucken-Menü geöffnet
  hat (bzw. dass es abgebrochen wurde) – ob wirklich gespeichert wurde,
  kann sie nicht prüfen.
- Keine Hilfeseite.
- Jederzeit möglich, auch mitten in der Reise (Zwischenstand).
- Überschrift "Reiselogbuch – <Titel>".
- Nur erfasste Tage, keine leeren Tage, keine Wetter-Platzhalter.
- Die Google-Maps-Links funktionieren in beiden Formaten.
- Spaltenbreiten passen sich dem Inhalt an.
- Hängender Einzug bei Aufzählungen und Smiley-Zeilen.
- Reihenfolge am Ende:
  1. Fazit
  2. Gesamtkosten
  3. Quartierliste (Quartier, Zeitraum, Anzahl Nächte, Maps-Link),
     falls bei der Reise aktiviert
  4. Statistik: Reisetage gesamt und davon erfasst, Anzahl der
     Quartiere, Wetter-Verteilung (z. B. "40×🌤 · 12×☀️ · 5×🌧"),
     Smileys: alle verwendeten aus Tagen und Fazit, absteigend nach
     Anzahl (z. B. "5×😊 · 3×😉 · 2×☹️"); Varianten wie ☹️/☹ zählen
     gemeinsam – Anzahl vor dem Symbol, ohne Leerzeichen
  5. Dezent als letzte Zeile:
     "Ausgabe V003 erstellt am TT.MM.JJJJ um hh:mm"
- Dateiname mit fortlaufender Versionsnummer (ein gemeinsamer Zähler
  pro Reise für HTML und PDF, im Backup enthalten):
  "Reiselogbuch <Reisetitel> JJJJ.MM.TT-JJJJ.MM.TT V001"
  z. B. "Reiselogbuch Australien 2026.08.24-2026.11.11 V003.pdf"
  (nie zwei Leerzeichen hintereinander)
- PDF bleibt im Hochformat (Safari ignoriert die Querformat-Vorgabe);
  beim Drucken ist der Seitenhintergrund weiß (kein grauer Balken).

SICHERHEIT
- Backup als Datei exportieren/importieren, enthält alle Reisen.
- Backup über den Knopf "Backup sichern" (Reisen), ebenfalls über das
  Teilen-Menü ("In Dateien sichern").
- Kein automatisches Backup bei der Ausgabe. Stattdessen erscheint nach
  der Ausgabe eine Erinnerung mit Knopf "Backup jetzt sichern", aber nur,
  wenn das letzte Backup mehr als 24 Stunden zurückliegt (beim PDF nach
  dem Schließen des Drucken-Menüs).
- Als Backup-Zeitpunkt zählt nur ein abgeschlossenes Teilen-Menü, ein
  Abbruch zählt nicht.
- Backup-Dateiname (ohne Versionszähler):
  "Ω Backup Reiselogbuch JJJJ.MM.TT hh.mm"
  z. B. "Ω Backup Reiselogbuch 2026.10.04 14.35.json"
```
