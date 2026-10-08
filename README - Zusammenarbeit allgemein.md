# Zusammenarbeit allgemein

**Version 1.3.0** · Stand 08.10.2026

Regeln für die Zusammenarbeit mit Claude bei allen iPad-Web-Apps von g811141a.
Diese Datei liegt vorerst im Repo ReiseLogBuch und **wandert später ins Design-Repo**.
App-spezifische Punkte stehen in der `CLAUDE.md` des jeweiligen App-Repos.

> **Hinweis für Claude:** Diese Regeln gelten in jeder Sitzung, auch nach langer Pause.
> Lies zu Beginn zusätzlich `README - Designrichtlinie allgemein.md` und die
> Designrichtlinie der App.

---

## 1. Sprache und Ton

- Deutsch, kurz und klar.
- Schaltflächen im Chat mit ihren Lucide-Icon-Namen benennen (z. B. „pencil“, „trash“),
  nicht mit Emojis.

## 2. Rückfragen – Antwortformat

- Rückfragen so stellen, dass kurz geantwortet werden kann:
  - **Ja/Nein- oder Ok-Fragen**, wo möglich.
  - Bei mehreren Möglichkeiten eine **Aufzählung mit a, b, c, d …**
  - Fragen nummerieren (1, 2, 3 …), damit die Antwort „1) a, 2) ja“ lauten kann.
- Eigene Empfehlung jeweils kurz dazuschreiben.

## 3. Apple-like entwickeln

- Alle Apps werden **Apple-like** entwickelt: Aussehen, Aufbau und Bedienung wie in den
  Apple-Apps auf dem iPad (iPadOS).
- Bei **jeder neuen Anforderung** recherchiert Claude, wie Apple das in seinen eigenen Apps
  (z. B. Notizen, Erinnerungen, Kontakte, Dateien, Safari, Mail, Numbers) und in den Human
  Interface Guidelines löst, und nennt das kurz („So macht es Apple: …“).
- Daraus macht Claude **Vorschläge bzw. Empfehlungen**, auch ungefragt, wenn eine Anforderung
  vom Apple-Standard abweicht oder Apple eine bessere Lösung hat. Entschieden wird wie immer
  per Rückfrage.
- Was im Web nicht geht (z. B. SF Symbols, echte Systemmenüs), wird so nah wie möglich
  nachgebaut und als Abweichung genannt.

## 4. Backlog

- Jedes App-Repo hat eine `BACKLOG.md` mit allen offenen Themen (Nummer, Thema, allgemein
  oder App, Status: vereinbart · offen · prüfen · später) und einem Abschnitt „Erledigt“.
- Neue Wünsche, offene Fragen und Prüfpunkte trägt Claude sofort ein; Erledigtes wandert mit
  Version und Datum nach „Erledigt“.
- **Claude erinnert an die offenen Themen:** zu Beginn einer Sitzung (kurze Liste) und am Ende
  jeder Antwort, in der etwas gebaut oder entschieden wurde („Offen im Backlog: …“).

## 5. Ablauf einer Änderung

1. Ideen sammeln und **nachfragen** („Frag nach“), bis alles geklärt ist.
2. Bei Gestaltungsfragen zuerst ein **Muster** (Screenshot) zeigen, bei Bedarf mit
   Varianten (a, b, c).
   - Muster zuerst **nur hell und quer**; dunkel und hoch erst, wenn hell passt.
   - Muster und Screenshots **in Viererpaketen** schicken (je Sendung höchstens 4 Bilder),
     damit man sie nacheinander durchsehen kann.
3. **Bei jeder Design-Änderung fragen, ob sie allgemein gilt oder nur für die App**
   (eigene Einschätzung als Vorschlag).
4. Zusammenfassen und fragen: „Soll ich die neue Version X.Y.Z erstellen?“ – mit
   vorgeschlagener Versionsnummer der App und der betroffenen Richtlinien.
5. **Erst nach ausdrücklichem „Ja“ bauen.**
6. Nur das ändern, was besprochen wurde – keine ungefragten Änderungen. Fällt beim Bauen
   etwas auf, es nennen statt es eigenmächtig zu ändern (Ausnahme: offensichtliche
   Fehler, dann ausdrücklich erwähnen).

## 6. Nach jeder Version

- Testen (hell und dunkel, iPad quer und hoch, alle betroffenen Abläufe).
- PROMPT.md, CHANGELOG.md und betroffene Designrichtlinien aktualisieren; in PROMPT.md und
  CHANGELOG.md die Versionen vermerken (z. B. „Reiselogbuch 1.1.0 · Designrichtlinie
  allgemein 2.0.0 · Designrichtlinie Reiselogbuch 1.1.0 · Zusammenarbeit allgemein 1.0.0“).
- Versionsnummer, Erstellungszeitpunkt und Cache-Name des Service Workers erhöhen.
- Auf `main` hochladen, prüfen, ob GitHub Pages die Version online gestellt hat.
- Screenshots in Viererpaketen schicken und die Änderungen auf Deutsch zusammenfassen; an
  den Neustart der App erinnern.

## 7. Versionen

- Dreistufig **Hauptversion.Nebenversion.Korrektur** für Apps, Richtlinien und diese
  Datei (Bedeutung siehe Designrichtlinie allgemein, Abschnitt 11).
- Jede Datei mit eigener Versionsnummer und Versionsgeschichte am Ende.

## 8. Ablage

- Ein Repo pro App, Bereitstellung über GitHub Pages aus `main`/Hauptordner.
- Allgemeines (diese Datei, Designrichtlinie allgemein) wandert später ins Design-Repo.
- App-Spezifisches: `CLAUDE.md`, `PROMPT.md`, `CHANGELOG.md`, `BACKLOG.md`,
  `README - Designrichtlinie <App>.md` im App-Repo.
- Keine Wiederholungen: App-Dateien verweisen auf die allgemeinen Dateien und enthalten nur
  Abweichungen und Ausprägungen.

---

## Versionsgeschichte

| Version | Datum | Art | Inhalt |
|---|---|---|---|
| 1.3.0 | 08.10.2026 | Neben | Neu: Backlog-Datei je App und Erinnerung an offene Themen |
| 1.2.0 | 08.10.2026 | Neben | Neu: Apple-like entwickeln – bei jeder Anforderung recherchieren, wie Apple es löst, und Vorschläge/Empfehlungen machen |
| 1.1.0 | 08.10.2026 | Neben | Muster zuerst nur hell und quer; Muster und Screenshots in Viererpaketen |
| 1.0.0 | 07.10.2026 | erste Fassung | Aus der Designrichtlinie allgemein ausgelagert; neu: Antwortformat (ja/nein, a/b/c), Frage „allgemein oder App?“ |
