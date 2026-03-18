# THE ARCADERS - Conference Website

> Conference project website for The Arcaders - a retro arcade cabinet built with Electron, React & TypeScript.
> Hosted via GitLab Pages.

---

## Overview

**The Arcaders** is a team project presented at the 2026 conference. This static multipage website gives visitors a quick overview of the project, the team behind it, and links to all related materials.

The site uses a shared retro CRT visual style across the homepage, project page, team page and materials page, with a consistent event header on each page.

---

## Repository Structure

```
/
├── index.html                     # Homepage
├── project.html                   # Project breakdown
├── team.html                      # Team page
├── materiaal.html                 # Materials page
├── theme.css                      # Shared styling
├── theme.js                       # Shared animations / interactions
├── assets/                        # Logo and profile images
└── README.md
```

### Pages

```
HOME        Landing page with event details and previews
PROJECT     Modules, concept and stack
TEAM        Team cards and role overview
MATERIAAL   Video, article, slides and source links
```

---

## Updating Content

Shared styling lives in `theme.css`, shared interactions live in `theme.js`, and page content lives in the individual HTML files. Search for the `VERVANG` placeholder to find the team links that still need real data.

### Team cards

Compact cards on the homepage look like this:

```html
<a href="https://linkedin.com/in/VERVANG" target="_blank" rel="noopener" class="player-mini">
  <div class="mini-avatar">P1</div>
  <div class="mini-name">TEAMLID 1</div>
  <div class="mini-role">Rol / specialisatie</div>
  <span class="mini-li">LINKEDIN ↗</span>
</a>
```

Replace `VERVANG` with the LinkedIn slug, `TEAMLID 1` with the real name, `P1` with initials, and `Rol / specialisatie` with the actual role. The same placeholders also appear on `team.html`.

### Material links

Find the four resource cards in `materiaal.html`:

```html
<!-- Replace # with real URL when available -->
<a href="#" class="resource-link">

<!-- Repo link -->
<a href="#" class="resource-link">
```

Once a link is live, also remove the `COMING SOON` badge from that card:

```html
<!-- Remove this line when the link is ready -->
<span class="resource-soon">COMING SOON</span>
```

---

## Deployment

### Requirements

- A GitLab repository with `main` as the default branch
- Pages visibility set to **Public** under **Settings > General > Visibility**

### Pipeline config

Create `.gitlab-ci.yml` in the repo root:

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

### Deploy

```bash
git add .
git commit -m "deploy: conference website"
git push origin main
```

The pipeline runs automatically. After roughly one minute the site is live at:

```
https://<namespace>.gitlab.io/<repository-name>
```

---

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 - custom properties, keyframe animations |
| Logic | Vanilla JavaScript - no build step, no dependencies |
| Fonts | Press Start 2P · Share Tech Mono (Google Fonts) |
| Loader | Pac-Man animation — uiverse.io / JkHuger |
| Hosting | GitLab Pages |

---

## Team

| Player | Name | Role |
|---|---|---|
| P1 | — | — |
| P2 | — | — |
| P3 | — | — |

---

*The Arcaders · Conference 2026 · INSERT COIN*
