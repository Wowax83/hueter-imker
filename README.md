# Bienen Hüter Pfalz – Honig-Webseite

Webauftritt von Alexander Hüter (Hüter Imker) in Frankenthal/Pfalz. Honig-Verkauf + Wespen- & Hornissenberatung.

**Repo:** https://github.com/Wowax83/hueter-imker
**Live:** https://hueter-imker.vercel.app
**Lokal:** `/store/KI/KI Projekt/Projekte/Clone/Imker-Website/`
**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind 3 · lucide-react · Resend (Mail)

---

## Branding

- **Headline**: „Bienen Hüter Pfalz"
- **Subtitle (kursiv)**: „Hüter Imker"
- **Claim**: „Honig aus Frankenthal und der Pfalz"
- **Inhaber**: Alexander Hüter
- **Adresse**: Oggersheimerstr. 14, 67227 Frankenthal
- **Telefon**: 01520 3180359
- **WhatsApp**: wa.me/4915203180359
- **E-Mail**: bienen.hueter.pfalz@gmail.com
- **USt**: Kleinunternehmer gem. § 19 UStG (keine USt-ID)

## Kontaktkanäle

- **Bestellungen + Kontakt** → `bienen.hueter.pfalz@gmail.com` (via Resend, `HONEY_MAIL_TO`)
- **Wespen-/Hornissenberatung** → direkter Anruf (siehe `tel:+4915203180359` in Hero)

---

## Schnellstart (lokal)

```bash
cp .env.example .env
# Werte aus /store/KI/KI Projekt/new.txt uebernehmen

# ACHTUNG: /store unterstuetzt keine Symlinks. Bei "EIO: i/o error, symlink":
#   cp -r "/store/KI/KI Projekt/Projekte/Clone/Imker-Website" /opt/data/
#   cd /opt/data/Imker-Website
#   npm install
npm install
npm run dev    # http://localhost:3000
```

## Deployment (Vercel)

Bei jedem Push auf `main` baut Vercel automatisch. Manueller Trigger via Vercel-API möglich (siehe unten).

**Vercel-Env-Vars** (production):
- `RESEND_API_KEY` — Resend-API-Key
- `HONEY_MAIL_TO` — `bienen.hueter.pfalz@gmail.com`
- `HONEY_MAIL_FROM` — `Bienen Hueter Pfalz <onboarding@resend.dev>` (Test-Absender; später eigene Domain verifizieren)

**Custom Domain**: in Vercel-Settings setzen (aktuell Platzhalter `hueter-imker.de`). Empfehlung: frankenweizigere Domain besorgen (z. B. `bienen-hueter-pfalz.de`) für besseren SEO.

---

## Projektstruktur

```
app/
  layout.tsx              Root-Layout, Metadata, Playfair-Font (Google-Fonts CDN)
  page.tsx                Startseite (ContactBar + alle Sektionen)
  globals.css             Tailwind + Reveal-Animationen + Papier-Textur-Background
  sitemap.ts              /, /impressum, /datenschutz
  robots.ts               erlaubt alles
  impressum/page.tsx      TMG §5 mit echten Hüter-Daten
  datenschutz/page.tsx    DSGVO-konform, Resend + Vercel-Hosting erwähnt
  api/
    kontakt/route.ts      Mail-Endpoint fuer Kontaktformular
    bestellung/route.ts    Mail-Endpoint fuer Honig-Bestellformular
  components/
    ContactBar.tsx        sticky Header oben (Telefon / WhatsApp / Mail)
    Nav.tsx               Anchor-Nav, markenweite Seitentitel
    Hero.tsx              Headline + Reveal-Staples, Honigwaben-Pattern + Halo als Background
    Vorstellung.tsx       Intro mit regionalem Bezug (Frankenthal/Pfalz)
    HonigListe.tsx       4 Honig-Sorten-Karten mit Inline-SVG-Gläsern
    BeratungSection.tsx   Wespen-/Hornissenberatung mit 4 Service-Cards
    BestellFormular.tsx   Mengen pro Sorte, Mail an bienen.hueter.pfalz@gmail.com
    KontaktFormular.tsx   Generisches Kontaktformular
    Footer.tsx            3-Spalten: Branding / Kontakt / Rechtliches
    Reveal.tsx            IntersectionObserver-Animationen (fade-in, pop, fade-up)

data/
  honig.json              4 Sorten: Blütenhonig, Sommerhonig, Waldhonig, Akazienhonig
                          (Texte mit Frankenthal-Bezug: Streuobstwiesen, Pfalz-Wälder etc.)
```

## Sections auf der Homepage (Reihenfolge)

1. **ContactBar** (sticky) – Telefon / WhatsApp / Mail
2. **Nav** (sticky) – Branding + Anchor-Links
3. **Hero** – Headline „Bienen Hüter Pfalz", Subtitle „Hüter Imker", CTA-Buttons (Text-only, ohne Bild)
4. **#vorstellung** – Über den Imker, regionale Verankerung
5. **#honig** – 4 Sorten-Karten (Blüten-, Sommer-, Wald-, Akazienhonig)
6. **#beratung** – Wespen- & Hornissenberatung, 4 Service-Cards
7. **#bestellen** – Bestellformular mit Mengen pro Sorte
8. **#kontakt** – Generisches Kontaktformular
9. **Footer** – 3-Spalten

## Designentscheidungen

- **Kein Sanity / CMS** – Honig-Daten in `data/honig.json`, einfach editierbar
- **Kein Framer Motion** – eigene `Reveal`-Komponente mit IntersectionObserver + CSS, spart ~30 KB Bundle
- **Playfair Display via Google Fonts** – serif-Headlines passen zum Flyer-/Imker-Look
- **Honigwaben-Pattern** im Hero-Background + Halo dahinter, Honiggläser inline-SVG
- **Papier-Textur** im Body-Background via CSS-Filter auf SVG-Noise
- **Kleinunternehmer §19 UStG** – Impressum ohne USt-ID-Feld

## Bilder / Illustrationen

**Aktuell keine** im Hero – bewusste Entscheidung nach mehreren Iterationen (Cartoon-SVG → detaillierte Vintage-SVG → 1911 Britannica-Stich → rausgenommen). Honiggläser in `HonigListe.tsx` sind inline-SVG.

---

## Workflow für die Nachwelt

### Code-Änderung lokal

1. Datei editieren (oder via Hermes `patch`/`write_file`)
2. `git add -A && git commit -m "..."`
3. `git push` → Vercel-Build triggert automatisch

### Manuelles Re-Deploy via Vercel-API (z. B. wenn Auto-Build hakt)

Tokens in `/store/KI/KI Projekt/new.txt` (`Vercelapikey:...`).

```python
import urllib.request, json
with open("/store/KI/KI Projekt/new.txt") as f:
    for line in f:
        if line.startswith("Vercelapikey:"):
            vercel_token = line.split(":", 1)[1].strip(); break

req = urllib.request.Request(
    "https://api.vercel.com/v13/deployments",
    data=json.dumps({
        "name": "hueter-imker",
        "target": "production",
        "gitSource": {"type": "github", "repo": "Wowax83/hueter-imker",
                       "repoId": 1402406712, "ref": "main"},
    }).encode(),
    headers={"Authorization": f"Bearer {vercel_token}",
              "Content-Type": "application/json",
              "User-Agent": "Hermes-Agent"},
    method="POST",
)
with urllib.request.urlopen(req) as r:
    print(r.read().decode())   # -> deployment_id
```

Dann alle 8 Sekunden `GET https://api.vercel.com/v13/deployments/{id}` pollen bis `READY` oder `ERROR`.

### Env-Vars in Vercel anpassen

Patches statt POST/DELETE (POST dupliziert):

```python
# Erst IDs holen
GET https://api.vercel.com/v10/projects/prj_.../env

# Dann PATCH pro Var
PATCH https://api.vercel.com/v10/projects/prj_.../env/{id}
Body: {"value": "neuer-wert", "type": "plain"}
```

### Mail-Versand testen

Formulare auf der Live-Seite ausfüllen → Mail muss innerhalb 1 min an `bienen.hueter.pfalz@gmail.com` ankommen. Resend-Dashboard checken (https://resend.com/logs) falls was hakt.

### Feste Sandbox-Sperre

`/store` unterstützt keine Symlinks → `npm install` bricht mit `EIO: i/o error, symlink` ab. Workaround: nach `/opt/data/Imker-Website` kopieren, dort installieren, zurück syncen. Siehe Schnellstart oben.

### Domain-Wechsel

1. Domain besorgen (z. B. IONOS, Cloudflare Registrar)
2. In Vercel-Settings → Domains → hinzufügen
3. DNS-Einträge laut Vercel-Anleitung setzen
4. Resend: Domain verifizieren, `HONEY_MAIL_FROM` auf eigene Domain umstellen

---

## Aktuelle Entscheidungen / offene Punkte

- **Domain**: `hueter-imker.de` ist Platzhalter; frankenweizigere Domain (`bienen-hueter-pfalz.de`) wäre besser
- **Resend-Absender**: Test-Adresse `onboarding@resend.dev`; für Produktiv-Versand verifizierte Domain nötig
- **Honig-Preise**: aktuell Platzhalter in `data/honig.json` (`preis` und `gewicht` Felder), User muss ausfüllen
- **Imkerfoto**: keins auf der Seite; bewusste Entscheidung, kann ergänzt werden wenn gewünscht
- **Hero-Bild**: explizit rausgenommen – Text-only funktioniert gut mit Reveal-Animationen
