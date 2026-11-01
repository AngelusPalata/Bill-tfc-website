# SPEC: Website for BILL TFC & Mémoires

## 1. Project summary

Build a professional **showcase website (site vitrine)** for **BILL TFC & Mémoires**, a business that helps students with their end-of-cycle work (TFC, mémoire, DEA/DES level) in the DRC.

**Tagline:** L'excellence académique, notre engagement !

**Goal of the site:**
- Present the services clearly.
- Build trust with students.
- Make it very easy to contact the business (WhatsApp, phone, email).

**Target visitors:** university students (third cycle and above) who need help with their TFC or mémoire. Most will visit from a **phone**, so mobile comes first.

---

## 2. Rules for the AI agent

- Use **plain HTML, CSS and JavaScript only**. No frameworks, no build tools.
- The owner of the project is a beginner. **Explain each file you create in simple English** (what it does, in 1 or 2 sentences).
- Keep code clean, with short comments in simple English.
- Work **page by page**. After each page, stop and let the owner check it in the browser before continuing.
- **Mobile first**: the site must look good on small phones, then tablets, then desktop.
- Do not invent facts, prices, or testimonials. Use only the content in this document. Where something is marked `TODO`, leave a clear placeholder.

---

## 3. Languages

- Two languages: **French (default)** and **English**.
- A language switch button **FR | EN** in the header, on every page.
- Keep all texts in one place (for example `js/translations.js`) so they are easy to edit.
- French texts are given below. Translate them into natural, professional English.
- Remember the chosen language (localStorage) so it stays when the visitor changes pages.

---

## 4. Brand and design

### Colors
| Use | Color | Hex |
|---|---|---|
| Main background | Navy blue | `#0B1F4B` |
| Darker navy (sections, footer) | Deep navy | `#071433` |
| Accent, titles, buttons | Gold | `#D4A63A` |
| Dark gold (hover, details) | Dark gold | `#B8892B` |
| Text on dark | White | `#FFFFFF` |

### Style
- Elegant, serious, academic. Navy blue background with gold accents and white text.
- Gold thin lines to separate sections.
- Large, bold titles. Easy to read on a phone.
- Buttons: gold background, navy text, rounded corners.
- Use simple icons for the services (people, document, microphone/speech, magnifying glass, shield/check).
- Fonts: use Google Fonts. Suggestion: **Montserrat** for titles, **Open Sans** for body text.

### Logo
Create the logo as an **SVG file** (`images/logo.svg`).
- Navy blue square or rounded background.
- A **gold graduation cap** (diamond shape on top, with a small tassel) above an **open gold book** (two curved pages).
- Below it, the text **BILL TFC & Mémoires** in white, with the `&` in gold.
- Below the name, in small gold text: *L'excellence académique, notre engagement*
- Also make a smaller version (icon only: cap and book) for the favicon.

---

## 5. Pages and structure

Four pages:

1. `index.html` Home
2. `services.html` Services
3. `work.html` Work (examples of subjects)
4. `contact.html` Contact

### Header (every page)
- Logo (links to Home)
- Menu: Home, Services, Work, Contact
- Language switch FR | EN
- On mobile: a hamburger menu

### Footer (every page)
- Logo and tagline
- Quick links
- Contact: WhatsApp / phone, email
- Social icons: WhatsApp, Facebook, Instagram
- Text: *Disponible 24h/24, 7j/7 – à vos côtés, à chaque étape.*
- Copyright line: © BILL TFC & Mémoires

### Floating WhatsApp button
- A round WhatsApp button fixed at the bottom-right corner on every page.
- Link: `https://wa.me/243997236789`

---

## 6. Page content

### 6.1 Home (`index.html`)

**Hero section**
- Small label: `NIVEAU DEA / DES` (gold badge)
- Title: **FRANCHISSEZ DÉSORMAIS UN VÉRITABLE CAP !** (the last part, "UN VÉRITABLE CAP !", in gold)
- Text: *Vous êtes au troisième cycle ou plus ? Vous êtes submergé et vous avez besoin d'un coup de pouce pour votre mémoire ? Pas de soucis ! BILL TFC & Mémoires se met à votre disposition du début à la fin de votre mémoire.*
- Buttons: **Nous contacter sur WhatsApp** (gold) and **Voir nos services** (outline)
- Decoration: a graduation cap and diploma illustration (simple SVG or CSS shapes).

**Services preview**
- Title: **Nos services sur mesure**
- 4 cards (short version), each linking to the Services page:
  1. Accompagnement personnalisé
  2. Structuration et rédaction
  3. Préparation de discours sur mesure
  4. Réduction du taux et test de plagiat

**Why choose us**
- Title: **Pourquoi nous choisir ?**
- List with check icons:
  - Expertise reconnue dans tous les domaines
  - Respect strict des délais
  - Confidentialité totale
  - Satisfaction garantie
  - Résultats à la hauteur de vos ambitions

**Quote block (gold border)**
- *VOTRE RÉUSSITE EST NOTRE PRIORITÉ. VOTRE MÉMOIRE, NOTRE EXPERTISE.*

**Closing call to action**
- *Ensemble, transformons votre potentiel en une réussite exceptionnelle !*
- Button: Nous contacter

### 6.2 Services (`services.html`)

Title: **Nos services sur mesure**

Four sections, each with an icon, a title and a list:

**1. Accompagnement personnalisé**
- Suivi du début à la soutenance
- Conseils méthodologiques adaptés
- Relecture et corrections approfondies
- Orientation thématique et problématique

**2. Structuration et rédaction**
- Élaboration de plan détaillé
- Rédaction scientifique rigoureuse
- Cohérence et enchaînement des idées
- Mise en forme selon les normes universitaires

**3. Préparation de discours sur mesure**
- Discours de soutenance percutants
- Présentations professionnelles
- Argumentation claire et convaincante
- Adaptation à votre domaine d'étude

**4. Réduction du taux et test de plagiat**
- Optimisation de l'originalité de votre travail
- Test de plagiat avec rapport détaillé
- Reformulation et amélioration du contenu
- Garantie d'un travail authentique à 100 %

**Section: Nos extras**
- Text: *Nous sommes heureux de vous annoncer que notre structure vous assiste également dans vos travaux universitaires courants. Vous êtes étudiant et vous cherchez à optimiser vos résultats ? Notre structure est là pour vous aider à réaliser tous vos travaux universitaires, des plus simples aux plus complexes. Bénéficiez d'un suivi personnalisé et d'une expertise reconnue.*

**Section: Disponibilité**
- *Disponible 24h/24, 7j/7, à vos côtés, à chaque étape.*

Bottom of page: call-to-action button to contact on WhatsApp.

### 6.3 Work (`work.html`)

Title: **Nos domaines d'intervention** (EN: Fields we work in)

Intro text: *Voici quelques-uns des domaines dans lesquels nous avons déjà accompagné des étudiants.*

- A grid of simple cards, one per field, each with an icon and the name of the field.
- `TODO (owner will decide later)`: the final list of fields and example subjects.
- Placeholder cards for now (the owner will confirm or change them): **Droit, Médecine, Économie, Gestion, Informatique, Sciences sociales**.
- Make it easy to add or remove a card by editing one list in the code (a JavaScript array or a clear HTML block).
- Do not invent real student names or real thesis titles.

### 6.4 Contact (`contact.html`)

Title: **Nous contacter**

Contact cards (big and easy to tap):
- **WhatsApp:** +243 99 72 36 789 (button opens `https://wa.me/243997236789`)
- **Phone:** +243 99 72 36 789 (link `tel:+243997236789`)
- **Email:** billdollars965@gmail.com (link `mailto:billdollars965@gmail.com`)
- **Availability:** Disponible 24h/24, 7j/7
- **Social:** Facebook, Instagram, WhatsApp
  - `TODO`: Facebook link = `#` (placeholder)
  - `TODO`: Instagram link = `#` (placeholder)

Optional simple message form (name, email, message) that opens the visitor's email app with `mailto:`. No backend needed.

---

## 7. Folder structure

```
bill-tfc-website/
├── SPEC.md
├── index.html
├── services.html
├── work.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js            (menu, WhatsApp button, small features)
│   └── translations.js    (all FR and EN texts)
└── images/
    ├── logo.svg
    └── favicon.svg
```

---

## 8. Technical requirements

- Valid, clean HTML with correct page titles and `<meta>` description (in French and English).
- Responsive layout using CSS Flexbox and Grid.
- Fast loading: no heavy images. Prefer SVG and CSS shapes.
- Good contrast and readable font sizes (minimum 16px for body text).
- Works offline when opened by double-clicking `index.html`.
- Easy to publish later (for example on GitHub Pages or Netlify).

---

## 9. Work plan (do in this order, stop after each step)

1. Create the folder structure and empty files.
2. Create `style.css` with colors, fonts, and base styles.
3. Create the logo and favicon (SVG).
4. Build the header and footer, and the floating WhatsApp button.
5. Build `index.html` (Home).
6. Build `services.html`.
7. Build `contact.html`.
8. Build `work.html` with placeholder cards.
9. Add the FR | EN language switch with `translations.js`.
10. Test on phone size and desktop size. Fix problems.

---

## 10. Open items (to fill later)

- [ ] Final list of fields and example subjects for the Work page
- [ ] Facebook page link
- [ ] Instagram page link
- [ ] Optional: real photos, testimonials, prices
