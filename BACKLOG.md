# Backlog – offene Themen

**Stand 08.10.2026** · Aktuelle Version: Reiselogbuch 2.1.5

Hier stehen alle offenen Themen. Erledigte Punkte wandern mit Version und Datum nach unten
in „Erledigt“. Claude erinnert zu Beginn und am Ende jeder Sitzung an die offenen Punkte
(siehe `README - Zusammenarbeit allgemein.md`).

Priorität: **1 hoch** (als Nächstes) · **2 mittel** · **3 niedrig** – gearbeitet wird immer an
den Themen mit der höchsten Priorität zuerst.

Status: **vereinbart** (entschieden, wartet auf „Ja“ zum Bauen) · **offen** (noch zu klären) ·
**prüfen** (auf dem iPad testen) · **später** (Idee, noch nicht dran)

---

## 1. Weitere Themen

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| T-01 | 2 | Langes Drücken auf ein Reiselogbuch in der Seitenleiste öffnet ein Kontextmenü: Öffnen (book-open) · Einstellungen (settings) · Reiselogbuch löschen (rot, Sprechblase); kein Wischen ([HIG – Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)) | allgemein | offen |
| T-02 | 2 | Responsive in drei Stufen: ab 1100 px wie jetzt (iPad quer) · 700–1100 px Seitenleiste darübergelegt (iPad hoch, Split View) · unter 700 px wie Apple auf dem iPhone: Startliste „Reiselogbücher“ als Seite mit „‹ Reiselogbücher“ zurück, Tage als Liste (je Tag ein Kasten), Fenster bildschirmfüllend, Abfragen von unten ([HIG – Layout](https://developer.apple.com/design/human-interface-guidelines/layout), [HIG – Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)). Muster iPhone gezeigt (Startliste, Tageliste, Tageserfassung, Abfrage von unten); offen: Bezeichnungen in den Tageskästen (Vorschlag: „Programm“ als Wort, sonst Emoji), „Gespeichert um …“ auf dem iPhone, Wetter-Symbole 40 px nur auf dem iPhone | allgemein | offen |
| T-03 | 2 | Daten zwischen iPad und iPhone abgleichen (Ablage in iCloud, Weiterbearbeitung auf dem iPhone): a) Datei in iCloud Drive mit Zusammenführen (kostenlos) · b) CloudKit JS (Entwicklerkonto) · c) echte App mit iCloud (Mac + Entwicklerkonto); Empfehlung a jetzt, c später – offen: Mac vorhanden? Entwicklerkonto? Arbeitsweise? | allgemein | offen |
| T-04 | – | Dauerhaften Speicher bei Safari anfordern (Daten werden nicht von selbst gelöscht), Anzeige im Menü der Seitenleiste – offen: übernehmen? Priorität (Vorschlag 1)? | allgemein | offen |
| T-05 | 2 | Bestehende (alte) Reiselogbücher aufbereiten und importierbar machen: Dateien (Word/PDF/Excel/HTML/Fotos) auslesen, Unklarheiten nachfragen, Vorschau zeigen, Datei erstellen; Überschneidungen prüfen. Offen: Form der Unterlagen, Anzahl, Weg (a: in aktuelles Backup einfügen · b: neue Funktion „Reiselogbuch importieren“, die hinzufügt statt ersetzt) | Reiselogbuch | offen |
| T-06 | 3 | Ausschreibungstexte (Reiseveranstalter) in Reiselogbücher umwandeln – für erledigte **und** geplante Reisen: Titel, Zeitraum, Reisemittel; je Tag das Programm („1. Tag“ → echtes Datum, Text wie in der Ausschreibung); Quartiere mit Ort, falls genannt; übrige Felder bleiben leer | Reiselogbuch | offen |
| T-07 | 3 | Alle Kapseln technisch gleich bauen: auch Kopfzeilen-Kapsel [share \| search \| ellipsis], Seitenleisten-Kapsel und Treffer-Pfeile ⌃ ⌄ – Schaltflächen genau so hoch wie der Innenraum (44 px minus Rand), Markierung liegt immer innerhalb des Randes | allgemein | vereinbart |

## 2. Später

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| S-01 | 3 | Design-Repo anlegen: allgemeine Dateien (Designrichtlinie allgemein, Zusammenarbeit allgemein) umziehen; Version der Designrichtlinie = Version des Design-Repos | allgemein | später |
| S-02 | 3 | Im Design-Repo: gemeinsames `design.css` und `ui.js` (Komponenten einmal programmiert), Vorlage für neue Apps | allgemein | später |
| S-03 | 3 | Startseite g811141a.github.io mit allen Apps | allgemein | später |

---

## Erledigt

| Nr. | Thema | Version | Datum |
|---|---|---|---|
| E-11 | Auf dem iPad geprüft und ok: P-08 Tastatur offen – Kopfzeilen bleiben sichtbar | Reiselogbuch 2.1.5 | 08.10.2026 |
| E-10 | Reiselogbuch 2.1.5: F-10 Kopfzeilen bei sichtbarer Tastatur sichtbar | Reiselogbuch 2.1.5 · allgemein 3.2.3 | 08.10.2026 |
| E-09 | Auf dem iPad geprüft und ok: P-01 Datumsfelder · P-02 Seitenleiste hoch · P-03 Sprechblasen/Menüs · P-04 HTML/PDF, Backup · P-05 Version 2.1.0 · P-06 Version 2.1.1 · P-07 Version 2.1.2 | bis Reiselogbuch 2.1.4 | 08.10.2026 |
| E-08 | Reiselogbuch 2.1.4: F-09 Markierung in Auswahl-Kapseln rund (Kreis/Kapsel innen) mit Abstand | Reiselogbuch 2.1.4 · allgemein 3.2.2 | 08.10.2026 |
| E-07 | Reiselogbuch 2.1.3: F-08 Markierung in Auswahl-Kapseln nicht mehr abgeschnitten | Reiselogbuch 2.1.3 | 08.10.2026 |
| E-06 | Reiselogbuch 2.1.2: F-06 Seitenleiste beim Start eingeblendet, F-07 Abstand unten 4 px | Reiselogbuch 2.1.2 · allgemein 3.2.1 | 08.10.2026 |
| E-05 | Reiselogbuch 2.1.1: F-01 PDF ohne Seitenleiste, F-02 Suche, F-03 Wetter in der Ausgabe, F-04 Betragsfeld dynamisch, F-05 Auswahl-Kapseln | Reiselogbuch 2.1.1 · allgemein 3.2.0 · Reiselogbuch-Richtlinie 2.1.1 | 08.10.2026 |
| E-04 | Reiselogbuch 2.1.0: B-01 bis B-12 (schwebende Seitenleiste, immer „Alle Tage“, Kalender-Icon, ellipsis bleibt blau, „Backup erstellen“, Statistik „Nächte“, Beträge „4.850,00 €“ rechtsbündig, Tabellenüberschriften 17 px halbfett) | Reiselogbuch 2.1.0 · allgemein 3.1.0 · Reiselogbuch-Richtlinie 2.1.0 | 08.10.2026 |
| E-01 | Links zu den Apple Human Interface Guidelines je Abschnitt und Komponente | Designrichtlinie allgemein 3.0.1 | 08.10.2026 |
| E-02 | Regel „Apple-like entwickeln, Apple-Lösungen recherchieren und empfehlen“ | Zusammenarbeit allgemein 1.2.0 | 08.10.2026 |
| E-03 | Neues Bedienkonzept: Seitenleiste, Kopfzeile mit Kapsel, Menüs, Sprechblasen, Fenster mit x/Häkchen | Reiselogbuch 2.0.0 | 08.10.2026 |
