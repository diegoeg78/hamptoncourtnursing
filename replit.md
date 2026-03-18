# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains a full React + Vite website prototype for Hampton Court Nursing & Rehabilitation Center, served by an Express API backend.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui + framer-motion + react-hook-form

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── hampton-court/      # React + Vite frontend website (previewPath: /)
│   │   └── src/
│   │       ├── App.tsx
│   │       ├── index.css
│   │       ├── hooks/use-contact.ts
│   │       ├── components/
│   │       │   ├── animations/FadeIn.tsx
│   │       │   ├── layout/Navbar.tsx
│   │       │   └── layout/Footer.tsx
│   │       └── pages/
│   │           ├── Home.tsx
│   │           ├── About.tsx
│   │           ├── Services.tsx
│   │           ├── Amenities.tsx
│   │           ├── FAQ.tsx
│   │           └── Contact.tsx
│   └── api-server/         # Express API server (previewPath: /api)
│       └── src/routes/
│           ├── health.ts
│           └── contact.ts  # POST /api/contact — contact form handler
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
└── scripts/                # Utility scripts
```

## Hampton Court Website

A modern, responsive prototype website for a skilled nursing and rehabilitation center in North Miami Beach, FL.

### Pages
- `/` — Homepage (Hero, Trust Band, Services Overview, Why Choose Us, Patient Journey, Testimonials, CTA)
- `/about` — About Us (family-owned story, mission, values)
- `/services` — Services (24-hr nursing, physical/occupational/speech therapy, short-term rehab, long-term support)
- `/amenities` — Amenities (rooms, therapy spaces, dining, common areas, outdoor spaces)
- `/faq` — FAQ (accordion with 6 questions)
- `/contact` — Contact & Admissions (inquiry form, placeholder phone/address/map)

### Contact Form API
- **POST** `/api/contact` — Accepts `{name, email, phone, message, relationship}`, returns `{success, message}`
- Server logs submissions to console (TODO: wire up real email/CRM when going live)

### Placeholder Data (to replace when going live)
- Phone: (305) 555-0100
- Address: 123 Hampton Court Blvd, North Miami Beach, FL 33160
- Email: admissions@hamptoncourt.example.com
- Testimonials: labeled as [Sample Family Story]
- Map: placeholder block (no real embed yet)

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/hampton-court` (`@workspace/hampton-court`)

React + Vite frontend, served at `/`. Uses Tailwind CSS, shadcn/ui components, framer-motion for animations, react-hook-form + zod for the contact form.

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/`. Has a contact form endpoint at `POST /api/contact`.

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. No schema models defined yet — not needed for the static prototype.
