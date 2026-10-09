# Tests

## HIG-Prüfskript `hig.mjs`

Misst die App gegen die HIG-Checkliste (`README - Designrichtlinie allgemein.md`, Abschnitt 16):
Antippflächen, Schriftgrößen, Kontraste (hell und dunkel), doppelte Anführungszeichen, Löschen am
Ende von Menüs und ob die auslösende Schaltfläche blau bleibt – in allen Ansichten, quer und hoch.
Bewusste Abweichungen (Abschnitt 16) werden nicht gezählt.

```
cd tests && npm install playwright   # einmalig (node_modules wird nicht hochgeladen)
node tests/hig.mjs                   # im Repo-Ordner; Ergebnis: Abweichungsliste
```

Claude lässt das Skript bei jeder Version laufen und nennt das Ergebnis im Apple-Review.
