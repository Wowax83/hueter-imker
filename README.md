# Hüter Imker – Honig-Webseite

Webauftritt des Hüter-Imkers. Next.js 14 (App Router) + Tailwind + Resend (Mail).

**Repo:** https://github.com/Wowax83/hueter-imker
**Lokaler Stand:** `/store/KI/KI Projekt/Projekte/Clone/Imker-Website/`
**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind 3 · Resend

---

## Schnellstart (lokal)

```bash
cp .env.example .env
# Werte aus /store/KI/KI Projekt/new.txt uebernehmen (RESEND_API_KEY, Mail-Adressen)

# ACHTUNG: /store unterstuetzt keine Symlinks. Wenn npm install mit
# "EIO: i/o error, symlink" abbricht, von /opt/data aus arbeiten:
#   cp -r "/store/KI/KI Projekt/Projekte/Clone/Imker-Website" /opt/data/
#   cd /opt/data/Imker-Website
#   npm install
npm install

npm run dev
# -> http://localhost:3000
```

## Deployment

Diese Seite wird über **Vercel** ausgeliefert, nicht über Hetzner:

1. Auf https://vercel.com mit Wowax83 einloggen
2. "Add New Project" → "hueter-imker" Repo importieren
3. **Root Directory** auf `.` lassen (default)
4. **Environment Variables** setzen:
   - `RESEND_API_KEY` — dein Resend-API-Key
   - `HONEY_MAIL_TO` — Empfänger-Mail für Kontakt + Bestellung
   - `HONEY_MAIL_FROM` — Absender (z. B. `Hueter Imker <onboarding@resend.dev>`)
5. Deploy → automatischer Build, URL z. B. `hueter-imker.vercel.app`
6. Custom Domain in Vercel-Projekt-Settings setzen (z. B. `hueter-imker.de`)

Bei jedem Push auf `main` baut Vercel automatisch neu.

## Projektstruktur

```
app/
  layout.tsx          Root-Layout, Metadata
  page.tsx            Startseite (Hero + alle Sektionen)
  globals.css         Tailwind-Setup
  components/
    Hero.tsx          Startseiten-Banner
    Vorstellung.tsx    Vorstellung des Imkers
    HonigListe.tsx    Grid mit Honig-Sorten
    BestellFormular.tsx  Bestellformular
    KontaktFormular.tsx  Kontaktformular
    Footer.tsx
    Nav.tsx
  api/
    kontakt/route.ts    POST /api/kontakt  → Mail an Imker
    bestellung/route.ts POST /api/bestellung → Mail mit Bestelldetails
data/
  honig.json          Sorten, Beschreibungen, Preise
```

## Daten anpassen

Honig-Sorten in `data/honig.json` editieren. Beim nächsten Push ist die neue Liste live.

## Resend

- Free Tier: 100 Mails/Tag, 3000/Monat – reicht für eine Imkerei
- Domain-Verifizierung in Resend-Dashboard nötig, falls `HONEY_MAIL_FROM` eine eigene Domain nutzt
- Für ersten Test: `HONEY_MAIL_FROM=Hueter Imker <onboarding@resend.dev>` reicht

## Bekannte Stolpersteine

- **Vercel Build Failures**: meist Resend-API-Key fehlt in den Env-Vars → Vercel-Projekt-Settings prüfen
- **Mail kommt nicht an**: Resend-Dashboard → Logs checken; Absender-Domain muss verifiziert sein
- **/store Symlink-Fehler**: siehe Schnellstart, Workaround mit `/opt/data`-Copy

## Workflow für die Nachwelt (Hermes)

Hermes-spezifischer Workaround:
1. Datei in `/opt/data/imker-patch/<pfad>` schreiben
2. `cp` ins Repo
3. `git diff` prüfen
4. Committen + pushen → Vercel deployt automatisch