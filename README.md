# THE ARCADERS

> Projectsite voor de graduation conference van **The Arcaders**.  
> Deze repository bevat de publieke website, niet de volledige desktopapplicatie zelf.

## 🎓 Projectcontext

**The Arcaders** is een graduation project dat twee werelden samenbrengt in één totaalervaring:

- een retro arcade launcher met lokale games en cabinet-feel
- een Guppy lab-omgeving voor hardware, tooling en live demo-interactie

De website is bedoeld als compacte publieks- en jurysite voor de conference. Ze legt uit wat het project is, wie eraan gewerkt heeft, hoe de opbouw in elkaar zit en waar de relevante materialen terug te vinden zijn.

## 📅 Praktische info

- **Event:** Graduation Conference
- **Datum:** 26 maart 2026
- **Locatie:** KdG Campus Groenplaats
- **Lokaal:** GR 211
- **Laatste README-update:** 19 maart 2026

## 🕹️ Waarom deze site bestaat

- Bezoekers in enkele seconden laten begrijpen wat The Arcaders precies is
- Het verschil tonen tussen de arcade-ervaring en Guppy als technische labmodus
- De rolverdeling binnen het team helder voorstellen
- Artikels, broncode en andere projectmaterialen op één plaats bundelen

## 🧱 Wat zit er in deze repo?

Dit is een **statische multipage website** zonder build step of dependencies. De site bestaat uit losse HTML-pagina's met één gedeeld stylesheet en één gedeeld JavaScript-bestand.

```text
/
├── index.html
├── project.html
├── team.html
├── materiaal.html
├── theme.css
├── theme.js
├── assets/
└── README.md
```

## 📄 Pagina-overzicht

| Pagina | Doel |
|---|---|
| `index.html` | Landing page met korte projectintro, eventinformatie en navigatie |
| `project.html` | Uitgebreide uitleg over concept, opbouw, arcade flow en Guppy |
| `team.html` | Teamvoorstelling en rolverdeling |
| `materiaal.html` | Publieke materialen zoals artikel, broncode, video en slides |

## 🎨 Stijl en technische keuzes

| Onderdeel | Keuze |
|---|---|
| Structuur | HTML5 |
| Styling | CSS3 met custom properties, gradients en animaties |
| Interactie | Vanilla JavaScript |
| Fonts | Press Start 2P en Share Tech Mono |
| Visuele richting | Retro arcade / CRT sfeer |
| Hosting | GitLab Pages |

## ✏️ Inhoud aanpassen

- Pas pagina-inhoud aan in de afzonderlijke HTML-bestanden.
- Beheer gedeelde styling in `theme.css`.
- Beheer gedeelde animaties en reveal-interactie in `theme.js`.
- Voeg nieuwe afbeeldingen of exports toe in `assets/`.

## 🚀 Lokaal bekijken

Open `index.html` rechtstreeks in je browser, of start lokaal een eenvoudige server:

```bash
python3 -m http.server 8000
```

Open daarna `http://localhost:8000`.

## 🌐 Deployen via GitLab Pages

Voor deze repo volstaat een eenvoudige Pages-pipeline die de statische bestanden naar `public/` kopieert.

```yaml
create-pages:
  stage: deploy
  script:
    - mkdir -p public
    - cp index.html public/
    - cp project.html public/
    - cp team.html public/
    - cp materiaal.html public/
    - cp theme.css public/
    - cp theme.js public/
    - cp -R assets public/
  artifacts:
    paths:
      - public
  pages: true
  rules:
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
```

Na een push naar de standaardbranch wordt de site automatisch gepubliceerd via GitLab Pages.

## 👥 Team

| Speler | Naam | Verantwoordelijkheid |
|---|---|---|
| Player 1 | Younes El Azzouzi | Platform engineering en UI design |
| Player 2 | Rayan Boufker | Hardware en ESP32-integratie |
| Player 3 | Matthias Adriaenssen | Security- en labcontext van Guppy |

## 🔗 Opmerking

Deze repository bevat de **projectsite**. De broncode van de bredere Arcade &amp; Guppy applicatie staat gelinkt op de materials-pagina van de website zelf.
