# 🚀 Portfolio — Amara Baradji

Portfolio professionnel d'**Amara Baradji** — Expert technico-fonctionnel ERP Odoo & Architecte IA et Data.

## ✨ Stack technique

| Technologie | Version | Usage |
|---|---|---|
| **Next.js** | 16.1.6 | Framework React (App Router, Turbopack) |
| **React** | 19.2 | UI Components |
| **Tailwind CSS** | 4.x | Styling (oklch, dark mode) |
| **Shadcn/ui** | Latest | Composants UI |
| **Framer Motion** | 12.x | Animations & scroll-reveal |
| **Lenis** | 1.3 | Smooth scroll (desktop) |
| **Lucide React** | Latest | Icônes |
| **next-themes** | 0.4 | Dark/Light mode |

## 🏗️ Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout racine + providers
│   ├── page.tsx            # Page principale
│   └── globals.css         # Styles globaux + design system
├── components/
│   ├── navbar.tsx          # Navigation sticky glassmorphism
│   ├── hero.tsx            # Hero avec photo + gradient orbs
│   ├── expertise.tsx       # Bento grid compétences
│   ├── experience.tsx      # Timeline expériences
│   ├── projects.tsx        # Cartes projets R&D
│   ├── formation.tsx       # Formations + certifications PDF
│   ├── contact.tsx         # Contact (Email, WhatsApp, LinkedIn)
│   ├── footer.tsx          # Footer
│   ├── smooth-scroll.tsx   # Lenis wrapper
│   └── theme-provider.tsx  # Dark/Light toggle
└── lib/
    ├── motion.ts           # Variants d'animation
    └── utils.ts            # Utilitaires
```

## 🚀 Démarrage

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm start
```

## 📦 Déploiement

### Vercel (recommandé)
1. Push sur GitHub
2. Importer le repo sur [vercel.com](https://vercel.com)
3. Déploiement automatique ✅

### GitHub Pages
Nécessite la config `output: 'export'` dans `next.config.ts`.

## 📄 Licence

© 2026 Amara Baradji. Tous droits réservés.
