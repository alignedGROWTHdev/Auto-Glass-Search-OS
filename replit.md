# Auto Glass Growth (formerly Auto Glass Search OS)

A specialist acquisition website helping established auto glass companies turn search demand into answered calls and booked glass jobs.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/auto-glass-search-os run dev` — run the website through its managed workflow
- `pnpm --filter @workspace/auto-glass-search-os run typecheck` — verify the website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/auto-glass-search-os/src/App.tsx` — routes, page content, shared shell, and lead form
- `artifacts/auto-glass-search-os/src/index.css` — brand tokens and responsive styling
- `artifacts/auto-glass-search-os/public/` — public SEO and browser assets

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

- Multi-page marketing site for auto glass SEO, local search, AI search visibility, and Google Ads
- Operator-specific positioning for windshield replacement, chip repair, ADAS recalibration, mobile fleets, dispatch, and insurance workflows
- Client-side visibility analysis form with validation and confirmation state

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
