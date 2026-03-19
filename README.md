# THE ARCADERS

> Graduation conference website for **The Arcaders**  
> This repository contains the public-facing project site, not the full desktop application.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitLab Pages](https://img.shields.io/badge/GitLab%20Pages-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)](https://docs.gitlab.com/user/project/pages/)
[![Source Code](https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YuuneesIBH/KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform)

**Direct source code repository:**  
[KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform](https://github.com/YuuneesIBH/KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform)

---

## ◆ Project Overview

**The Arcaders** is a graduation project that brings two distinct experiences together inside one concept:

- `ARCADE MODE` - a retro-inspired launcher with local games, cabinet atmosphere, and a unified visual identity
- `GUPPY MODE` - a lab-oriented environment for hardware interaction, tooling, and controlled live demo workflows

This website exists as the public presentation layer of the project. It gives visitors, jurors, and conference attendees a fast overview of the concept, the team, the technical structure, and the available project materials.

---

## ◈ Event Details

| Item | Information |
|---|---|
| `EVENT` | Graduation Conference |
| `DATE` | 26 March 2026 |
| `LOCATION` | KdG Campus Groenplaats |
| `ROOM` | GR 211 |
| `README UPDATED` | 19 March 2026 |

---

## ▣ Why This Site Exists

- To explain the project clearly within a few seconds
- To show the split between the arcade experience and the Guppy lab environment
- To present the team structure in a professional way
- To centralize the article, source code, and supporting project materials

---

## ▤ Repository Structure

This is a **static multipage website** with no build step and no external runtime dependencies.

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

---

## ◇ Page Map

| File | Purpose |
|---|---|
| `index.html` | Landing page with the project intro, event details, and quick navigation |
| `project.html` | Full project explanation, architecture, arcade flow, and Guppy mode |
| `team.html` | Team presentation and role split |
| `materiaal.html` | Public project materials such as the article, source code, video, and slides |

---

## ▦ Design And Stack

| Layer | Choice |
|---|---|
| `MARKUP` | HTML5 |
| `STYLING` | CSS3 with custom properties, gradients, and animations |
| `INTERACTION` | Vanilla JavaScript |
| `TYPOGRAPHY` | Press Start 2P and Share Tech Mono |
| `VISUAL DIRECTION` | Retro arcade / CRT-inspired presentation |
| `HOSTING` | GitLab Pages |

---

## ▸ Related Project Stack

The public website in this repository supports a broader project ecosystem. The main Arcade &amp; Guppy platform is built and documented in the linked source repository.

[![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ESP32](https://img.shields.io/badge/ESP32-333333?style=flat-square&logo=esphome&logoColor=white)](https://www.espressif.com/en/products/socs/esp32)
[![Ollama](https://img.shields.io/badge/Ollama-111111?style=flat-square&logo=ollama&logoColor=white)](https://ollama.com/)

**Main platform repository:**  
[github.com/YuuneesIBH/KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform](https://github.com/YuuneesIBH/KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform)

---

## ▸ Editing Content

- Update page content directly in the individual HTML files
- Keep shared styling in `theme.css`
- Keep shared animations and reveal behavior in `theme.js`
- Store project images and exports inside `assets/`

---

## ▸ Local Preview

Open `index.html` directly in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

---

## ▸ Deployment

For GitLab Pages, a small pipeline that copies the static files into `public/` is enough:

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

After pushing to the default branch, the site is published automatically through GitLab Pages.

---

## ▸ Team

| Slot | Name | Responsibility |
|---|---|---|
| `PLAYER 1` | Younes El Azzouzi | Platform engineering and UI design |
| `PLAYER 2` | Rayan Boufker | Hardware and ESP32 integration |
| `PLAYER 3` | Matthias Adriaenssen | Security and lab-oriented Guppy workflows |

---

## ▸ Note

This repository contains the **project website**. The full Arcade &amp; Guppy platform source code is available directly here:

[KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform](https://github.com/YuuneesIBH/KdG-TheLab-Graduation-AI-GCP-Arcade-HackingPlatform)
