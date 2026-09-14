# Sanity Setup (KristianKim Portfolio)

## Playground

The `/playground` page and the three latest homepage uploads share one gallery and content loader. The homepage uses a tilted preview composition (a swipeable strip on mobile); the full page uses alternating sizes and offsets. These layouts repeat automatically as you add entries. “Shuffle the table” changes the current browser's display order only, never the source data or homepage latest ordering.

### Maintain through Codex (default)

Edit `src/data/playground.ts`. Existing image entries are imported from `src/data/content.ts`; new entries can be added directly to `playgroundItems`. Put media in `public/images/playground/` or `public/remotion/` and use a path starting with `/`. Set `publishedAt` to control newest-first ordering (the seeded dates are display-order defaults). A video needs an MP4/WebM `src` and an image `thumbnail`. Future-dated entries stay hidden.

### Maintain through Sanity

1. Run `npm run studio` and open **Playground**.
2. Create entries with a unique slug, title, caption, date, media description, and image or video. Videos require a poster image. Publish each entry.
3. Set `PLAYGROUND_SOURCE=sanity` in the local `.env` and in the deployment environment, then restart/redeploy the site. The existing Sanity project and dataset are reused.
4. Deploy the updated Studio with `npm run studio:deploy` when you want the hosted editor to expose the new schema.

`PLAYGROUND_SOURCE=local` (or leaving it unset) uses the local file. Sanity mode exclusively reads published Sanity entries; local entries are not merged or automatically uploaded. Empty Sanity content stays empty, including after unpublishing the last entry. Publishing changes updates the server-rendered pages without a site rebuild after the source has been configured. Use short compressed videos; grid tiles load poster images, and video playback starts only in the modal. Reduced-motion visitors start videos manually.

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
