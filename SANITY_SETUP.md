# Sanity Setup (KristianKim Portfolio)

## 1) Install Sanity Studio (inside this repo)

```bash
npm create sanity@latest -- --project m63s8wwp --dataset production --typescript --template clean --output-path studio
```

## 2) Replace studio schema

- Copy `sanity/schemas/*` into `studio/schemaTypes/`
- In `studio/schemaTypes/index.ts`, export `schemaTypes` from `sanity/schemas/index.ts`

## 3) Astro env vars

Create `.env` in repo root:

```bash
PUBLIC_SANITY_PROJECT_ID=m63s8wwp
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-02-26
```

## 4) Vercel env vars

Set same three vars in Vercel project settings.

## 5) Content model includes

- `project`
- `post`
- `author`
- Portable Text blocks: quote, callout, metrics, gallery, full-width image (image block)

## Notes

- Private projects are supported via `isPrivate` boolean and displayed with a "Private" badge in Works index.
- Password field is scaffolded for future lock-screen behavior.
