# Content Contribution Guide

This guide is for anyone adding or updating readings in Kinekt Research.

## Quick Answer

No, it is not only adding a new file.

To add a new reading, you must update three places:
1. Add the MDX file in the correct level folder.
2. Add metadata in lib/library.ts.
3. Add the slug mapping in lib/mdx-map.ts.

## Step-by-Step

1. Choose the level folder
- Place the reading in one of:
  - content/level-1/
  - content/level-2/
  - content/level-3/
  - content/level-4/
  - content/level-5/
  - content/level-6/
  - content/level-7/
  - content/level-8/

2. Create the reading file
- Use kebab-case for the filename.
- Use the .mdx extension.
- Example: content/level-2/my-new-reading.mdx

3. Write the reading content
- Start with a clear top-level heading.
- Keep headings and sections consistent with existing readings.
- Keep links relative to app routes when linking to other readings.

4. Add metadata in lib/library.ts
- Add a new object in allItems with:
  - slug
  - title
  - author
  - level
  - paths
  - topics
  - description
  - keyConcepts
- Ensure the slug exactly matches the filename (without .mdx).

5. Add loader entry in lib/mdx-map.ts
- Add a new map entry for the same slug.
- Point it to the file path under content/level-x/.

6. Verify locally
- Run: bun dev
- Open the library page and the reading page.
- Confirm it appears in level/path/topic views.

## Common Mistakes

- Slug mismatch between filename, library.ts, and mdx-map.ts.
- Wrong level number in library.ts.
- Using .md instead of .mdx.
- Forgetting to add the mdx-map.ts entry.

## Licensing for Contributors

By contributing content under content/, you agree your contribution is published under CC BY 4.0.
See LICENSE-CONTENT.md at the repository root.
