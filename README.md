# MINHAJ — Site vitrine

Site vitrine one-page de **MINHAJ SAS** (conseil & solutions informatiques).
Next.js 15 (App Router) · TypeScript · Tailwind CSS v4. Prêt pour Vercel.

## Développement

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Build production

```bash
npm run build
npm start
```

## Déploiement Vercel

```bash
vercel deploy        # preview
vercel deploy --prod # production
```

Aucune variable d'environnement requise.

## Structure

- `app/layout.tsx` — métadonnées SEO, police Inter, dark mode sans flash.
- `app/page.tsx` — assemblage des sections.
- `app/opengraph-image.tsx` / `app/icon.tsx` — image OG et favicon générées.
- `components/` — `Header`, `Hero`, `About`, `Products`, `Contact`, `Footer`, `ThemeToggle`.

## À personnaliser

- **Email de contact** : `CONTACT_EMAIL` dans `components/Contact.tsx`
  (`contact@minhajgroup.com`).
- **URL du site** : `siteUrl` dans `app/layout.tsx`.
- **Aperçus produits** : captures d'écran statiques dans `public/`
  (`preview-hadn.jpg`, `preview-xklic.jpg`). Pour les rafraîchir, remplacer
  simplement ces fichiers.
