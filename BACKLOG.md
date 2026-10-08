# Backlog – offene Themen

**Stand 08.10.2026** · Aktuelle Version: Reiselogbuch 2.0.0

Hier stehen alle offenen Themen. Erledigte Punkte wandern mit Version und Datum nach unten
in „Erledigt“. Claude erinnert zu Beginn und am Ende jeder Sitzung an die offenen Punkte
(siehe `README - Zusammenarbeit allgemein.md`).

Priorität: **1 hoch** (als Nächstes) · **2 mittel** · **3 niedrig** – gearbeitet wird immer an
den Themen mit der höchsten Priorität zuerst.

Status: **vereinbart** (entschieden, wartet auf „Ja“ zum Bauen) · **offen** (noch zu klären) ·
**prüfen** (auf dem iPad testen) · **später** (Idee, noch nicht dran)

---

## 1. Reiselogbuch 2.1.0 – vereinbart, wartet auf das Ende der Tests

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| B-01 | 1 | Seitenleiste schwebend wie in Safari: runde Ecken, Lichtkante, Schatten wie Schaltflächen, Abstand zum Rand | allgemein | vereinbart |
| B-02 | 1 | Beim Öffnen eines Reiselogbuchs (und nach Neustart) immer „Alle Tage“ | allgemein | vereinbart |
| B-03 | 1 | Datumsfelder mit eigenem Kalender-Icon (calendar) rechts im Feld, auf allen Geräten gleich | allgemein | vereinbart |
| B-04 | 1 | Fehler: ellipsis der Seitenleiste bleibt blau, solange eine Abfrage/Meldung von dort offen ist (z. B. Backup) | allgemein | vereinbart |
| B-05 | 1 | „Backup sichern“ heißt „Backup erstellen“ | Reiselogbuch | vereinbart |
| B-06 | 1 | Text nur noch „Letztes Backup erstellt am TT.MM.JJJJ um hh:mm“ (bzw. „Noch kein Backup erstellt.“) – Seitenleiste unten, Menü der Seitenleiste, Erinnerung nach HTML/PDF; „Heute noch kein Backup …“ entfällt | Reiselogbuch | vereinbart |
| B-07 | 1 | Statistik: unter „Quartiere“ neue Zeile „Nächte“ (Summe aller Nächte) | Reiselogbuch | vereinbart |
| B-08 | 1 | Gesamtkosten mit zwei Nachkommastellen; fehlen sie, ergänzt die App „,00“; „,-“ entfällt | allgemein | vereinbart |
| B-09 | 1 | Beträge wie bei Apple: „4.850,00 €“ – € hinter dem Betrag (App: [ 4.850,00 ] €, Ausgabe: „4.850,00 €“) | allgemein | vereinbart |
| B-10 | 1 | Betragsfelder immer rechtsbündig (Regel in der Designrichtlinie) | allgemein | vereinbart |
| B-11 | 1 | Tabellenüberschriften 17 px halbfett, gleich groß wie die Zellen (Apple „Headline“) | allgemein | vereinbart |
| B-12 | 1 | Beim Bauen: Designrichtlinie allgemein 3.1.0 und Reiselogbuch 2.1.0 mit HIG-Links für neue Regeln | – | vereinbart |

## 2. Auf dem iPad prüfen

| Nr. | Prio | Thema | Status |
|---|---|---|---|
| P-01 | 1 | Datumsfelder: Breite passt zum Datum (27.08.2026) ohne Leerraum | prüfen |
| P-02 | 1 | Seitenleiste im Hochformat (darübergelegt, schließt nach Auswahl) | prüfen |
| P-03 | 1 | Sprechblasen und Menüs an der richtigen Stelle, auch in Fenstern | prüfen |
| P-04 | 1 | Teilen-Menü: HTML und PDF speichern, Backup erstellen und laden | prüfen |

## 3. Weitere Themen

| Nr. | Prio | Thema | Gilt | Status |
|---|---|---|---|---|
| T-01 | 2 | Langes Drücken auf ein Reiselogbuch in der Seitenleiste öffnet ein Kontextmenü: Öffnen (book-open) · Einstellungen (settings) · Reiselogbuch löschen (rot, Sprechblase); kein Wischen ([HIG – Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)) | allgemein | offen |

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
| E-01 | Links zu den Apple Human Interface Guidelines je Abschnitt und Komponente | Designrichtlinie allgemein 3.0.1 | 08.10.2026 |
| E-02 | Regel „Apple-like entwickeln, Apple-Lösungen recherchieren und empfehlen“ | Zusammenarbeit allgemein 1.2.0 | 08.10.2026 |
| E-03 | Neues Bedienkonzept: Seitenleiste, Kopfzeile mit Kapsel, Menüs, Sprechblasen, Fenster mit x/Häkchen | Reiselogbuch 2.0.0 | 08.10.2026 |
