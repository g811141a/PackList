# Backlog – offene Themen

**Stand 08.10.2026** · Aktuelle Version: Reiselogbuch 2.1.0

Hier stehen alle offenen Themen. Erledigte Punkte wandern mit Version und Datum nach unten
in „Erledigt“. Claude erinnert zu Beginn und am Ende jeder Sitzung an die offenen Punkte
(siehe `README - Zusammenarbeit allgemein.md`).

Priorität: **1 hoch** (als Nächstes) · **2 mittel** · **3 niedrig** – gearbeitet wird immer an
den Themen mit der höchsten Priorität zuerst.

Status: **vereinbart** (entschieden, wartet auf „Ja“ zum Bauen) · **offen** (noch zu klären) ·
**prüfen** (auf dem iPad testen) · **später** (Idee, noch nicht dran)

---

## 1. Fehler – geplant als Reiselogbuch 2.1.1 (wartet auf „Ja“ zum Bauen)

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| F-01 | 1 | PDF-Ausgabe bei eingeblendeter Seitenleiste fehlerhaft (quer): Beim Drucken bleibt der linke Platz der Seitenleiste frei, das Reiselogbuch ist verschoben/abgeschnitten. Ursache: Abstand `body.docked` gilt auch beim Drucken. Lösung: beim Drucken nur das Reiselogbuch, ohne Seitenleiste und ohne deren Abstand (Druck-Regel `body.docked { padding: 0 }`); prüfen quer und hoch, mit und ohne Seitenleiste | allgemein | vereinbart |
| F-02 | 1 | Suche: Nach jedem Buchstaben springt die Ansicht zum Treffer (Bildmitte) und die Kopfzeile mit dem Suchfeld verrutscht (iPad mit Tastatur). Lösung: Kopf- und Suchzeile bleiben fest oben (auch bei offener Tastatur); Sprung erst nach kurzer Tipp-Pause (ca. 0,5 s); Treffer direkt unter der Suchzeile statt in der Mitte; gleich für ⌃ ⌄ und Eingabetaste | allgemein | vereinbart |
| F-03 | 1 | Ausgabe (Vorschau, HTML, PDF): Wetter in der Spalte „Tag“ in eigener Zeile unter dem Datum („Mo, 24.08.“ / „☀️“), damit die Spalte schmäler wird – wie in der App | Reiselogbuch | vereinbart |
| F-04 | 1 | Betragsfeld (Gesamtkosten) dynamisch: leer bzw. bei kleinen Beträgen genau so breit, dass „100.000,00“ vollständig passt (statt 150 px); bei längeren Beträgen wächst es beim Tippen mit; Breite aus der echten Schriftbreite berechnet | allgemein | vereinbart |
| F-05 | 1 | Auswahl-Leisten als **eine Kapsel** (schwebend, Lichtkante, Schatten, ohne Ränder dazwischen), Inhalt bei knappem Platz nach links/rechts wischbar mit weichem Verlauf am Rand: Smileys („Wie war was?“, „Essen und Trinken“, Fazit), Wetter-Symbole und Reisemittel; gewählte Einträge in der Kapsel blau getönt; „Zurücksetzen“ (rotate-ccw) bleibt eigene runde Schaltfläche rechts daneben; Antippen, lange drücken und Sortierung wie bisher ([HIG – Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars), Vorbild Tapback in Nachrichten) | allgemein | vereinbart |

## 2. Auf dem iPad prüfen

| Nr. | Prio | Thema | Status |
|---|---|---|---|
| P-01 | 1 | Datumsfelder: Breite passt zum Datum (27.08.2026) mit Kalender-Icon, ohne Leerraum | prüfen |
| P-02 | 1 | Seitenleiste im Hochformat (darübergelegt, schließt nach Auswahl) | prüfen |
| P-03 | 1 | Sprechblasen und Menüs an der richtigen Stelle, auch in Fenstern | prüfen |
| P-04 | 1 | Teilen-Menü: HTML und PDF speichern, Backup erstellen und laden | prüfen |
| P-05 | 1 | Version 2.1.0: schwebende Seitenleiste, Gesamtkosten mit Cent, ellipsis bleibt blau beim Backup | prüfen |

## 3. Weitere Themen

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| T-01 | 2 | Langes Drücken auf ein Reiselogbuch in der Seitenleiste öffnet ein Kontextmenü: Öffnen (book-open) · Einstellungen (settings) · Reiselogbuch löschen (rot, Sprechblase); kein Wischen ([HIG – Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)) | allgemein | offen |
| T-02 | 2 | Responsive in drei Stufen: ab 1100 px wie jetzt (iPad quer) · 700–1100 px Seitenleiste darübergelegt (iPad hoch, Split View) · unter 700 px wie Apple auf dem iPhone: Startliste „Reiselogbücher“ als Seite mit „‹ Reiselogbücher“ zurück, Tage als Liste (je Tag ein Kasten), Fenster bildschirmfüllend, Abfragen von unten ([HIG – Layout](https://developer.apple.com/design/human-interface-guidelines/layout), [HIG – Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)). Muster iPhone gezeigt (Startliste, Tageliste, Tageserfassung, Abfrage von unten); offen: Bezeichnungen in den Tageskästen (Vorschlag: „Programm“ als Wort, sonst Emoji), „Gespeichert um …“ auf dem iPhone, Wetter-Symbole 40 px nur auf dem iPhone | allgemein | offen |
| T-03 | 2 | Daten zwischen iPad und iPhone abgleichen (Ablage in iCloud, Weiterbearbeitung auf dem iPhone): a) Datei in iCloud Drive mit Zusammenführen (kostenlos) · b) CloudKit JS (Entwicklerkonto) · c) echte App mit iCloud (Mac + Entwicklerkonto); Empfehlung a jetzt, c später – offen: Mac vorhanden? Entwicklerkonto? Arbeitsweise? | allgemein | offen |
| T-04 | – | Dauerhaften Speicher bei Safari anfordern (Daten werden nicht von selbst gelöscht), Anzeige im Menü der Seitenleiste – offen: übernehmen? Priorität (Vorschlag 1)? | allgemein | offen |
| T-05 | 2 | Bestehende (alte) Reiselogbücher aufbereiten und importierbar machen: Dateien (Word/PDF/Excel/HTML/Fotos) auslesen, Unklarheiten nachfragen, Vorschau zeigen, Datei erstellen; Überschneidungen prüfen. Offen: Form der Unterlagen, Anzahl, Weg (a: in aktuelles Backup einfügen · b: neue Funktion „Reiselogbuch importieren“, die hinzufügt statt ersetzt) | Reiselogbuch | offen |
| T-06 | 3 | Ausschreibungstexte (Reiseveranstalter) in Reiselogbücher umwandeln – für erledigte **und** geplante Reisen: Titel, Zeitraum, Reisemittel; je Tag das Programm („1. Tag“ → echtes Datum, Text wie in der Ausschreibung); Quartiere mit Ort, falls genannt; übrige Felder bleiben leer | Reiselogbuch | offen |

## 4. Später

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| S-01 | 3 | Design-Repo anlegen: allgemeine Dateien (Designrichtlinie allgemein, Zusammenarbeit allgemein) umziehen; Version der Designrichtlinie = Version des Design-Repos | allgemein | später |
| S-02 | 3 | Im Design-Repo: gemeinsames `design.css` und `ui.js` (Komponenten einmal programmiert), Vorlage für neue Apps | allgemein | später |
| S-03 | 3 | Startseite g811141a.github.io mit allen Apps | allgemein | später |

---

## Erledigt

| Nr. | Thema | Version | Datum |
|---|---|---|---|
| E-04 | Reiselogbuch 2.1.0: B-01 bis B-12 (schwebende Seitenleiste, immer „Alle Tage“, Kalender-Icon, ellipsis bleibt blau, „Backup erstellen“, Statistik „Nächte“, Beträge „4.850,00 €“ rechtsbündig, Tabellenüberschriften 17 px halbfett) | Reiselogbuch 2.1.0 · allgemein 3.1.0 · Reiselogbuch-Richtlinie 2.1.0 | 08.10.2026 |
| E-01 | Links zu den Apple Human Interface Guidelines je Abschnitt und Komponente | Designrichtlinie allgemein 3.0.1 | 08.10.2026 |
| E-02 | Regel „Apple-like entwickeln, Apple-Lösungen recherchieren und empfehlen“ | Zusammenarbeit allgemein 1.2.0 | 08.10.2026 |
| E-03 | Neues Bedienkonzept: Seitenleiste, Kopfzeile mit Kapsel, Menüs, Sprechblasen, Fenster mit x/Häkchen | Reiselogbuch 2.0.0 | 08.10.2026 |
