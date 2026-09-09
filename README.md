# RAASA

RAASA is a restaurant landing page built around the idea of traditional Indian cooking, memory, fire, and regional food.

The site presents RAASA as an evening dining experience, with a strong focus on Indian culinary heritage, seasonal ingredients, traditional cooking techniques, and a mix of vegetarian and non vegetarian dishes.

## Live Demo

https://naveenkr14.github.io/RAASA-A-RESTAURENT/

## Repository

https://github.com/naveenkr14/RAASA-A-RESTAURENT

## About the project

This project was created as a restaurant landing page with a visual style that feels warm, premium, and rooted in Indian tradition.

The page includes:

- A hero section introducing RAASA and its dining concept
- A restaurant story section focused on Indian cooking and family traditions
- An interactive menu with category filters
- Vegetarian and non vegetarian dishes
- A heritage section focused on fire, tandoor, dum cooking, and hand ground spices
- A drinks section featuring traditional Indian drinks
- A visit and reservation section
- A responsive mobile navigation menu
- Scroll based reveal animations
- An animated ember effect in the hero section
- Accessibility considerations such as semantic HTML, labels, ARIA attributes, skip navigation, and reduced motion support

## Tech stack

The project is intentionally lightweight and uses standard web technologies:

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- SVG illustrations
- HTML Canvas for the animated ember effect

No framework or backend is required to run the current version.

## Project structure

```text
RAASA-A-RESTAURENT/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

### index.html

Contains the complete page structure, restaurant content, menu items, heritage section, drinks section, and reservation form.

### styles.css

Contains the visual design, layout, responsive styles, typography, colors, animations, menu cards, forms, and mobile layouts.

### script.js

Handles the interactive parts of the website, including:

- Mobile navigation
- Menu filtering
- Scroll reveal animations
- Reservation form interaction
- Hero ember animation
- Reduced motion handling

## Running locally

Because this is a static website, there is no build step or package installation required.

You can simply clone the repository:

```bash
git clone https://github.com/naveenkr14/RAASA-A-RESTAURENT.git
```

Move into the project:

```bash
cd RAASA-A-RESTAURENT
```

Then open `index.html` in a browser.

For a better local development experience, you can also use the Live Server extension in VS Code.

## Deployment

The project is deployed using GitHub Pages.

GitHub Pages is configured to publish from:

```text
Branch: main
Folder: / (root)
```

The live site is available at:

```text
https://naveenkr14.github.io/RAASA-A-RESTAURENT/
```

## Design direction

The visual direction is based on Indian culinary heritage rather than a generic restaurant template.

The design uses warm earthy tones, dark charcoal backgrounds, muted cream surfaces, brass inspired accents, editorial typography, and custom SVG illustrations to create a traditional but modern restaurant identity.

The main visual idea is built around the relationship between food, fire, memory, and regional Indian cooking.

## Accessibility

The project includes several accessibility focused details:

- Semantic HTML structure
- Skip to content link
- Descriptive labels for form controls
- ARIA labels and states for interactive navigation
- Keyboard friendly buttons and form controls
- Reduced motion support using `prefers-reduced-motion`

## Current scope

This is currently a frontend focused restaurant landing page.

The reservation form provides a frontend confirmation experience, but it does not currently connect to a real booking database, payment system, email service, or restaurant reservation provider.

A future version could connect the reservation form to a backend API or a third party reservation service.

## Future improvements

Some possible next steps are:

- Connect reservations to a real backend
- Add a real menu management system
- Add table availability
- Add online ordering
- Add a CMS for restaurant content
- Add real restaurant images
- Add analytics
- Add SEO and Open Graph metadata
- Add a custom domain
- Add automated deployment checks

## Author

Naveen Kumar

GitHub:
https://github.com/naveenkr14
