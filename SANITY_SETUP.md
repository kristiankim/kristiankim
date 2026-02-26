# Sanity Setup (KristianKim Portfolio)

Sanity Studio is now scaffolded in `/studio` and wired to project `m63s8wwp` dataset `production`.

## Run Studio

```bash
npm run studio
```

## Build Studio

```bash
npm run studio:build
```

## Deploy Studio

```bash
npm run studio:deploy
```

## Astro env vars

Create `.env` in repo root:

```bash
PUBLIC_SANITY_PROJECT_ID=m63s8wwp
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-02-26
```

## Vercel env vars

Set same three vars in Vercel project settings.

## Content model includes

- `project`
- `post`
- `author`
- Portable Text blocks:
  - image (full-width supported in front-end renderer pass)
  - quote block
  - callout block
  - metrics block
  - gallery block

## Notes

- Private projects are supported via `isPrivate` boolean and displayed with a "Private" badge in Works index.
- Password field is scaffolded for future lock-screen behavior.
