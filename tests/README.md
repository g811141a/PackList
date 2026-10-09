# Tests

## HIG-Prüfskript `hig.mjs`

Geht alle Ansichten des Reiselogbuchs durch und misst sie mit der HIG-Prüfung aus AppDesign
(`AppDesign/tests/hig.mjs`, Designrichtlinie allgemein Abschnitt 16):
Antippflächen, Schriftgrößen, Kontraste (hell und dunkel), doppelte Anführungszeichen, Löschen am
Ende von Menüs und ob die auslösende Schaltfläche blau bleibt – in allen Ansichten, quer und hoch.
Bewusste Abweichungen (Abschnitt 16) werden nicht gezählt.

```
# AppDesign neben diesem Repo klonen (../AppDesign)
cd tests && npm install playwright   # einmalig (node_modules wird nicht hochgeladen)
node tests/hig.mjs                   # im Repo-Ordner; Ergebnis: Abweichungsliste
```

Claude lässt das Skript bei jeder Version laufen und nennt das Ergebnis im Apple-Review.
