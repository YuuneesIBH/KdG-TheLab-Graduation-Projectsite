# THE ARCADERS — Conference Website

> Conference project website for The Arcaders — a retro arcade cabinet built with Electron, React & TypeScript.
> Hosted via GitLab Pages.

---

## Overview

**The Arcaders** is a team project presented at the 2025 conference. This static website gives visitors a quick overview of the project, the team behind it, and links to all related materials.

The site features a Pac-Man boot animation on load, a retro CRT aesthetic matching the project's visual identity, and sections for the project description, team, and conference materials.

---

## Repository Structure

```
/
├── index.html                     # Single-page website
├── thearcaders_logo_cropped.png   # Team logo asset
├── .gitlab-ci.yml                 # GitLab Pages pipeline
└── README.md
```

### Page Sections

```
┌─────────────────────────────────────────────────┐
│  LOADER      Pac-Man boot animation              │
│  HERO        Logo, tagline, badges               │
│  TICKER      Scrolling marquee                   │
├─────────────────────────────────────────────────┤
│  PROJECT     What The Arcaders is                │
│  TEAM        3 members with LinkedIn links       │
│  MATERIAAL   Video · Article · Slides · Repo     │
└─────────────────────────────────────────────────┘
```

---

## Updating Content

All content lives in `index.html`. Search for the `VERVANG` placeholder to find everything that needs to be filled in.

### Team cards

Each of the three team blocks looks like this:

```html
<a href="https://linkedin.com/in/VERVANG" target="_blank" rel="noopener" class="team-card">
  <div class="avatar">P1</div>
  <div class="team-name">TEAMLID 1</div>
  <div class="team-role">Rol / specialisatie</div>
  <span class="li-btn">LINKEDIN ↗</span>
</a>
```

Replace `VERVANG` with the LinkedIn slug, `TEAMLID 1` with the real name, `P1` with initials, and `Rol / specialisatie` with the actual role.

### Material links

Find the four tiles in the `MATERIAAL` section:

```html
<!-- Replace # with real URL when available -->
<a href="#" class="link-tile">

<!-- Repo link -->
<a href="https://gitlab.com/VERVANG-REPO" ...>
```

Once a link is live, also remove the `COMING SOON` badge from that tile:

```html
<!-- Remove this line when the link is ready -->
<span class="tile-soon">COMING SOON</span>
```

---

## Deployment

### Requirements

- A GitLab repository with `main` as the default branch
- Pages visibility set to **Public** under **Settings > General > Visibility**

### Pipeline config

Create `.gitlab-ci.yml` in the repo root:

```yaml
pages:
  stage: deploy
  script:
    - mkdir -p public
    - cp index.html public/
    - cp thearcaders_logo_cropped.png public/
  artifacts:
    paths:
      - public
  only:
    - main
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
| Styling | CSS3 — custom properties, keyframe animations |
| Logic | Vanilla JavaScript — no build step, no dependencies |
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

*The Arcaders · Conference 2025 · INSERT COIN*