# Shilp — Homepage

Next.js 14 (App Router) + **TypeScript** + Tailwind CSS.
Saara content typed data files me hai, components sirf render karte hain.

## Chalane ka tarika

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start
npm run typecheck  # sirf TypeScript check
```

Project lists and project detail pages come only from active MongoDB records
created in the admin. If the API is unavailable, project rows and details remain
empty instead of showing static projects. See the workspace-level `README.md`
for the three-app admin setup.

## Folder structure

```
shilp/
├── data/                     ← YAHAN SAB CONTENT EDIT KARO (.ts)
│   ├── site.ts               brand, navigation, footer, contact
│   ├── hero.ts               hero headline; featured project comes from MongoDB
│   ├── about.ts              "People Matter…" block + 3 counters
│   ├── project-sections.ts   section headings and artwork only
│   ├── banners.ts            "Family • Matters", "Context • Matters"
│   ├── journal.ts            "Spirit Of Shilp" + journal cards
│   └── testimonials.ts       "Words" section
│
├── public/images/            ← YAHAN APNI IMAGES DAALO
│   └── *.svg                 placeholders, same naam se replace karo
│
├── src/
│   ├── types/
│   │   └── content.ts        saare content ke TypeScript types
│   │
│   ├── app/
│   │   ├── layout.tsx        html shell, font, metadata
│   │   ├── page.tsx          homepage — sections ka order yahan hai
│   │   └── globals.css       tailwind + .shell / .index-row / .pill
│   │
│   └── components/
│       ├── Header.tsx        logo, nav, About Us dropdown, mobile menu
│       ├── Hero.tsx          full-screen opening frame
│       ├── About.tsx         heading + paragraphs + image
│       ├── Stats.tsx         8000+ / 20,000,000+ / 55+ Places
│       ├── CommercialIndex.tsx
│       ├── ResidentialIndex.tsx
│       ├── PlottedIndex.tsx
│       ├── StoryBanner.tsx   dono full-width film bands
│       ├── Spirit.tsx        grey "Spirit Of Shilp" block
│       ├── Journal.tsx       3-card rail
│       ├── Testimonials.tsx  black "Words" rail
│       ├── Footer.tsx        bada SHILP wordmark + links
│       └── Carousel / IndexRow / Arrow / Wordmark / SectionHeading
│
├── tsconfig.json             strict mode on, @/ aur @data/ aliases
├── tailwind.config.ts        colors, type scale, letter-spacing
└── next.config.mjs
```

## Navigation dropdown

Dropdown **About Us** ke andar hai. `data/site.ts` me `primaryNav` dekho —
jis entry me `children` array bhara hoga, uske neeche panel khulega:

```ts
{
  label: 'About Us',
  href: '/about',
  children: [
    { label: 'Our Work', href: '/about/our-work' },
    { label: 'Career', href: '/about/career' },
    { label: 'Team', href: '/about/team' },
    { label: 'Project Tree', href: '/about/project-tree' },
  ],
}
```

Kisi aur item me dropdown chahiye to bas uska `children` bhar do — Header
apne aap arrow aur panel dikha dega. Khali `children: []` matlab simple link.

## Images replace karna

`public/images/` me jo `.svg` placeholders hain, unhi naam se apni `.jpg` / `.webp`
daal do, phir `data/*.ts` me path ka extension badal do:

```ts
// data/hero.ts
image: '/images/hero-twin-towers.jpg',
```

## Types

Saare content ke shapes `src/types/content.ts` me hain. Data file me kuch galat
likhoge (typo, missing field) to `npm run typecheck` turant pakad lega.

Naya section add karne ke liye: type banao → `data/` me file → component → `page.tsx` me daalo.

## Notes

- Font Inter, `src/app/layout.tsx` me `<link>` se load hota hai.
- Mobile-first: `sm` 640px, `lg` 1024px se full desktop layout.
- Keyboard focus, reduced-motion aur alt text sab handled hain.
