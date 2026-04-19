# Kinekt Research

Kinekt Research is a Next.js reading library for economics, investing, and quantitative finance. The app uses MDX for the reading content so new contributors can add or edit material without touching the page components.

## Getting Started

Using npm:

1. Install dependencies with `npm install`.
2. Start the local app with `npm run dev`.
3. Build for production with `npm run build`.

Using Bun:

1. Install dependencies with `bun install`.
2. Start the local app with `bun run dev`.
3. Build for production with `bun run build`.

## Content Structure

The library lives in `content/level-*/*.mdx`. Each file is a reading, and the app loads it by slug.

The supporting metadata is defined in `lib/library.ts`, while `lib/mdx-map.ts` maps slugs to MDX modules.

## Adding a Reading

1. Create a new `.mdx` file in the right `content/level-*` folder.
2. Add the new reading to `lib/library.ts` so it appears in the library, path, and topic views.
3. Add the slug to `lib/mdx-map.ts` so the reading page can load it.
4. If needed, add a new asset to `public/` and reference it from the MDX file.

For a complete contributor checklist, see `content/README.md`.

## Editing Notes

- MDX content is the easiest place for newcomers to work.
- The shared styling lives in `app/globals.css`.
- The article shell is in `components/ArticleLayout.tsx`.
- The path and topic browser cards are in `components/PathPicker.tsx` and `components/TopicBrowser.tsx`.

## Copyright and Licensing

Copyright (c) 2026 Shyam Vyas.

Licensing in this repository is split by asset type:

- Source code, UI components, build scripts, and other non-content files are fully owned by Shyam Vyas and are all rights reserved. See `LICENSE-CODE.md`.
- Written content in `content/` is licensed under Creative Commons Attribution 4.0 International (CC BY 4.0). See `LICENSE-CONTENT.md`.

Attribution requirement for reused content: credit "Shyam Vyas — Kinekt Research" and include a link to the source repository plus the CC BY 4.0 license.
